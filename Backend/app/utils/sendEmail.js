const nodemailer = require("nodemailer");
// host: process.env.SMTP_HOST,
// port: process.env.SMTP_PORT,
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  var message = {
    from: process.env.SMTP_EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // const message = {
  //   from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
  //   to: options.email,
  //   subject: options.subject,
  //   text: options.message,
  // };

  const info = await transporter.sendMail(message);
};

module.exports = sendEmail;
