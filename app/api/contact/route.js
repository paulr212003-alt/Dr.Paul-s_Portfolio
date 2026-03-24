import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body?.name?.trim() || "";
    const email = body?.email?.trim() || "";
    const message = body?.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please complete all fields before sending." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
    const toEmail = process.env.CONTACT_TO_EMAIL || "sudip.rishabh@gmail.com";

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !fromEmail) {
      return NextResponse.json(
        {
          message:
            "Email service is not configured yet. Add the SMTP environment variables to enable messages."
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      auth: {
        pass: smtpPass,
        user: smtpUser
      },
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465
    });

    await transporter.sendMail({
      from: fromEmail,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #1f2937;">
          <h2 style="margin-bottom: 12px;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      to: toEmail
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form send failed", error);

    return NextResponse.json(
      { message: "Something went wrong while sending the message." },
      { status: 500 }
    );
  }
}
