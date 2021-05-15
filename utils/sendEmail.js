import fetch from 'node-fetch'
imp


const sendEmail = async ({ name, email }) => {
    await fetch(process.env.SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SENDGRID_API_Key}`
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
                  "date": "May 14th, 2021"
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