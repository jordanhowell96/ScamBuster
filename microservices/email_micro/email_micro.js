const zmq = require('zeromq');
const nodemailer = require('nodemailer');
const { createTestAccount } = require('nodemailer');

const sock = new zmq.Reply();

async function run() {
  // Ethereal test account
  const testAccount = await createTestAccount();

  // Nodemailer transporter with ethereal test account information
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'sarina.harris@ethereal.email',
      pass: 'cDfJfTmZNCDpnffE3F',
    },
  });

  console.log('Listening for email addresses and messages...');
  await sock.bind('tcp://*:5555');

  while (true) {
    const [msg] = await sock.receive();
    const { email, subject, message } = JSON.parse(msg.toString());

    const mailOptions = {
      from: testAccount.user,
      to: email,
      subject: subject,
      text: message,
    };

    console.log(`Sending email to ${email} ...`);
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        sock.send(JSON.stringify({ error: 'Failed to send email' }));
      } else {
        console.log(`Email sent: ${info.response}`);
        sock.send(JSON.stringify({ success: 'Email sent' }));
      }
    });
  }
}

run();