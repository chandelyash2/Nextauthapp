import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = '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'

const sendEmail = async ({ name, email }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              subject: 'verification '
            }
          ],
          from: {
            email: 'yash.codedrill@gmail.com',
            name: 'Codedrill'
          },
          dynamic_template_data: {
                  "guest": "Yash Chandel",
                  "partysize": "4",
                  "english": true,
                  "date": "April 1st, 2021"
                },
          content: [
            {
              type: 'text/html',
              value: `This is the verification email from codedrill`
            }
          ],
          template_id:"4bf5069b-5692-47e9-be02-0a1d75b48e7e"
        })
    });
}

export { sendEmail };