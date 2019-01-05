const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.MY_HOST,
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
});

const sendEmail = (info) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: 'contato@vittra.com',
      subject: '[Contato Site]',
      html: `
        <b>Assunto</b>: ${info.subject},\n
        <b>Name</b>: ${info.name},\n
        <b>Email</b>: ${info.email},\n
        <b>Fone</b>: ${info.phone},\n
        <b>Mensagem</b>: ${info.message}
      `,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve('ok');
    });
  });
};

module.exports = sendEmail;
