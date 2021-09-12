const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lyubohar@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lyubohar@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Hey ${name}. We're sorry to see you go. Now fuck off.`
    })
}

module.exports = {
    sendWelcomeEmail: sendWelcomeEmail,
    sendCancelationEmail: sendCancelationEmail
}
