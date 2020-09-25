const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstname = user.firstname;
    this.url = url;
    this.from = `Oluwapelumi from Rumi <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // Sendgrid
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
    }

    // To use sendgrid in development
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD
      }
    });

    // To use mailtrap
    // return nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: process.env.EMAIL_PORT,
    //   auth: {
    //     user: process.env.EMAIL_USERNAME,
    //     pass: process.env.EMAIL_PASSWORD
    //   }
    // });
  }

  // Send Actual Email
  async send(template, subject, info = '') {
    // 1) Render HTML based on a PUG template

    // console.log(info);
    const html = pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`,
      {
        firstname: this.firstname,
        url: this.url,
        subject,
        info
      }
    );

    // 2) Define the email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html)
      // html:
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Rumi family');
  }

  async sendLogin(info) {
    await this.send('login', 'New Login ALert', info);
  }

  async sendDeactivate() {
    await this.send('deactivate', 'Have you found a roommate');
  }

  async sendPayment(info) {
    await this.send('payment', 'Rumi Subscription status', info);
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Reset your Password (Url valid for 10 mins)'
    );
  }

  async sendVerifyEmail() {
    await this.send('verifyEmail', 'Verify Your Email (Url valid for 10 mins)');
  }
};
