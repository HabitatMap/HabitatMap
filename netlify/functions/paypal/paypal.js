const process = require("process");
const fetch = require("node-fetch");

const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL } = process.env;

// Check if we're in preview mode (no environment variables)
const isPreviewMode = !PAYPAL_CLIENT_ID || !PAYPAL_APP_SECRET || !PAYPAL_API_URL;

const getUnitPrice = (name) => {
  if (name === "AirBeam Mini") {
    return 99;
  }
  return 199;
};

const generateAccessToken = async () => {
  try {
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_APP_SECRET
    ).toString("base64");
    const response = await fetch(`${PAYPAL_API_URL}/v1/oauth2/token`, {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

const createOrder = async (cart, shippingOption) => {
  // If in preview mode, return a mock order ID
  if (isPreviewMode) {
    console.log("Preview mode: Creating mock order for cart:", cart);
    return {
      statusCode: 200,
      body: JSON.stringify({
        id: "mock-order-id-" + Date.now(),
        status: "CREATED",
        preview_mode: true
      })
    };
  }

  const url = `${PAYPAL_API_URL}/v2/checkout/orders`;
  const accessToken = await generateAccessToken();

  // Calculate totals from cart items
  let itemTotalValue = 0;
  const items = cart.map(item => {
    const unitPrice = getUnitPrice(item.name);
    const itemTotal = unitPrice * item.quantity;
    itemTotalValue += itemTotal;

    return {
      name: item.name,
      quantity: item.quantity,
      unit_amount: {
        currency_code: "USD",
        value: unitPrice.toString(),
      },
    };
  });

  const shippingCosts = calculateShippingCosts(cart, shippingOption);
  const totalValue = itemTotalValue + shippingCosts;

  const body = JSON.stringify({
    intent: "CAPTURE",
    purchase_units: [
      {
        reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b",
        amount: {
          currency_code: "USD",
          value: totalValue.toString(),
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: itemTotalValue.toString(),
            },
            shipping: {
              currency_code: "USD",
              value: shippingCosts.toString(),
            },
            discount: {
              currency_code: "USD",
              value: "0",
            },
          },
        },
        items: items,
      },
    ],
    payment_source: {
      paypal: {
        experience_context: {
          payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
          payment_method_selected: "PAYPAL",
          user_action: "PAY_NOW",
          landing_page: "LOGIN",
        },
      },
    },
  });

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: body,
  });

  const data = await response.json();

  return { statusCode: response.status, body: JSON.stringify(data) };
};

const capturePayment = async (orderID) => {
  // If in preview mode, return a mock capture response
  if (isPreviewMode) {
    console.log("Preview mode: Capturing mock order:", orderID);
    return {
      statusCode: 200,
      body: JSON.stringify({
        id: "mock-capture-id-" + Date.now(),
        status: "COMPLETED",
        purchase_units: [{
          payments: {
            captures: [{
              id: "mock-capture-" + Date.now(),
              status: "COMPLETED"
            }]
          }
        }],
        preview_mode: true
      })
    };
  }

  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_API_URL}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
  });

  const data = await response.json();

  return { statusCode: response.status, body: JSON.stringify(data) };
};

const handler = async (req) => {
  try {
    const { action } = JSON.parse(req.body);

    if (action === "create") {
      const { cart, shippingOption } = JSON.parse(req.body);
      return await createOrder(cart, shippingOption);
    } else if (action === "capture") {
      const { orderID } = JSON.parse(req.body);
      return await capturePayment(orderID);
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid action" })
      };
    }
  } catch (error) {
    console.error("Handler error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};

const calculateShippingCosts = (cart, shippingOption) => {
  let firstUnitPrice;
  let additionalUnitPrice;

  if (shippingOption === "domestic") {
    firstUnitPrice = 10;
    additionalUnitPrice = 5;
  } else if (shippingOption === "international") {
    firstUnitPrice = 35;
    additionalUnitPrice = 10;
  } else {
    return 0;
  }

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalQuantity === 1) {
    return firstUnitPrice;
  } else if (totalQuantity >= 2) {
    return firstUnitPrice + (totalQuantity - 1) * additionalUnitPrice;
  }

  return 0;
};

module.exports = { handler };
