const process = require("process");
const fetch = require("node-fetch");

const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL } = process.env;
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

const createOrder = async (quantity, shippingOption, name) => {
  const url = `${PAYPAL_API_URL}/v2/checkout/orders`;
  const accessToken = await generateAccessToken();

  const UNIT_PRICE = getUnitPrice(name);
  const itemTotalValue = quantity * UNIT_PRICE;
  const shippingCosts = calculateShippingCosts(quantity, shippingOption);
  const totalValue = itemTotalValue + shippingCosts;

  const body = JSON.stringify({
    intent: "CAPTURE",
    purchase_units: [
      {
        reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b",
        amount: {
          currency_code: "USD",
          value: totalValue,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: itemTotalValue,
            },
            shipping: {
              currency_code: "USD",
              value: shippingCosts,
            },
            discount: {
              currency_code: "USD",
              value: 0,
            },
          },
        },
        items: [
          {
            name: name,
            quantity: quantity,
            unit_amount: {
              currency_code: "USD",
              value: UNIT_PRICE,
            },
          },
        ],
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
  const { action } = JSON.parse(req.body);

  if (action === "create") {
    const { cart } = JSON.parse(req.body);
    const { quantity, shippingOption, name } = cart[0];
    return await createOrder(quantity, shippingOption, name);
  } else if (action === "capture") {
    const { orderID } = JSON.parse(req.body);
    return await capturePayment(orderID);
  } else {
    return { statusCode: 400 };
  }
};

const calculateShippingCosts = (quantity, shippingOption) => {
  var firstUnitPrice;
  var additionalUnitPrice;

  if (shippingOption === "domestic") {
    firstUnitPrice = 10;
    additionalUnitPrice = 5;
  } else if (shippingOption === "international") {
    firstUnitPrice = 35;
    additionalUnitPrice = 10;
  }

  if (quantity == 1) {
    return firstUnitPrice;
  } else if (quantity >= 2) {
    return firstUnitPrice + (quantity - 1) * additionalUnitPrice;
  }
};

module.exports = { handler };
