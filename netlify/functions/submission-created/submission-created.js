const process = require('process');
const fetch = require('node-fetch');

const { SENDGRID_API_KEY } = process.env;

const handler = async (event) => {
  const { form_name } = JSON.parse(event.body).payload;

  if (form_name === 'discount-code') {
    const { email } = JSON.parse(event.body).payload;
    const body = {
      'personalizations': [
        {
          'to': [
            {
              'email': email
            }
          ],
        }
      ],
      'from': {
        'email': 'info@habitatmap.org',
        'name': 'HabitatMap'
      },
      'template_id': 'd-c25929ac11cd456ea6439f010b11dc55'
    };

    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const data = await response.json();
    } catch (error) {
      return { statusCode: 422, body: String(error) }
    }
  }
}

module.exports = { handler }
