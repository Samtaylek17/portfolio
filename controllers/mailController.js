const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const auth = {
  auth: {
    api_key: `${process.env.MAILGUN_API_KEY}`,
    domain: `${process.env.MAILGUN_DOMAIN}`,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, project, description, cb) => {
  const mailOptions = {
    from: email,
    to: "samtaylek@gmail.com",
    subject: project,
    text: `Sender Name: ${name}. \n Message: ${description}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
