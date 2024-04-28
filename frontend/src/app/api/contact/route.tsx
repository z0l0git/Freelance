import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request: any) {
  console.log("dealing with request");
  const formData = await request.formData();
  const name = formData.get("Name");
  const email = formData.get("Email");
  const message = formData.get("Message");

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: "freelancer01.devs@gmail.com",
      pass: "mtdomxqwitzfikub",
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: "freelancer01.devs@gmail.com",
      to: email,
      replyTo: email,
      subject: `Contact Form Submission from ${email}`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: "Error: email was not sent" });
  }
}
