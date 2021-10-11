import { AnyLengthString } from "aws-sdk/clients/comprehendmedical";

import express from "express";

const router = express.Router();


router.get("/SUM", (req:any, res:any) => {
  const { page_number, page_length } = req.query;
const sum=Number(req.query.num1) + Number(req.query.num2)

  res.send(sum.toString());
});

import nodemailer from "nodemailer";







var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ranjiniaithal1@gmail.com',
    pass: '@melluranji143'
  }
});

var mailOptions = {
  from: 'ranjiniaithal1@gmail.com',
  to: 'ranjiniaithal98@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};




 router.get("/SUB", (req:any, res:any) => {
    const { num1, num2 } = req.query;
  const sum=Number(req.query.num1) - Number(req.query.num2)
  


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

    res.send(sum.toString());
  });


module.exports = router;
