import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Mail to owner
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: "New Career Application 🚀",
      html: `
        <h2>New Career Application Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Date of Birth:</strong> ${data.dob}</p>
        <p><strong>Email:</strong> ${data.gmail}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>10th:</strong> ${data.tenth}</p>
        <p><strong>12th:</strong> ${data.twelfth}</p>
        <p><strong>Graduation:</strong> ${data.graduation}</p>
        <p><strong>LinkedIn:</strong> ${data.linkedin}</p>
      `,
    });

    // Mail to applicant
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: data.gmail,
      subject: "Application Received – Thank You!",
      html: `
        <h3>Hi ${data.name},</h3>
        <p>Thank you for showing interest in joining our team!</p>
        <p>We’ve received your details and will reach out soon.</p>
        <br/>
        <p>Warm Regards,<br/>Team</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Application sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
