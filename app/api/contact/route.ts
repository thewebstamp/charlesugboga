import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "altherion1@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${
        process.env.EMAIL_USER || "altherion1@gmail.com"
      }>`,
      to: "altherion1@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}

---
Sent from Charles Ugboga Portfolio Website
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #eaeaea; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #667eea; }
    .message { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin: 15px 0; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
      <p>Charles Ugboga Portfolio</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div>${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message">${message.replace(/\n/g, "<br>")}</div>
      </div>
      <div class="footer">
        <p>This message was sent from your portfolio website contact form.</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      </div>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully! I will get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to send email. Please try again later or contact me directly.",
      },
      { status: 500 }
    );
  }
}
