const  {validationResult}  = require("express-validator");
const nodemailer = require("nodemailer");

// Function to generate a random coupon code
function generateCouponCode(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }
  return code;
}

// @desc FEEDBACK
// @Route POST /feedbacksy
// @Access Public
const feedback = async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  // NodeMailer proccessing ...
   // Generate a random coupon code
   const couponCode = generateCouponCode(6);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  let mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: `${req.body.subject}`,
    html: 
    `<div>
    <p>To: ${req.body.email}</p>
    <p>Subject: ${req.body.subject}</p>
    <p>${req.body.text}</p>
    <p>Your special offer coupon code: ${couponCode}</p>
    </div>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.json({ message: "Error: Message is not sent" });
    } else {
      console.log("Email sent: " + info);
      return res.json({ message: "Thanks for your valuable feedback! An email copy of your feedback is emailed to you! Also your special offer coupon code: "+couponCode });
    }
  });
};

module.exports = { feedback };