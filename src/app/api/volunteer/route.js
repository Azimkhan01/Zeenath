import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, area, pincode, address, contact, graduation } = body;
    
    // 🔹 Validate
    if (!name || !email || !area || !pincode || !address || !contact || !graduation) {
      return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });
    }

    // 🔹 Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 🔸 Mail to owner
    const ownerMail = {
      from: `"Volunteer Form" <${process.env.GMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: "📬 New Volunteer Application",
      html: `
        <h2>New Volunteer Request Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Area:</b> ${area}</p>
        <p><b>Pincode:</b> ${pincode}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Contact:</b> ${contact}</p>
        <p><b>Graduation/Studying In:</b> ${graduation}</p>
        <hr/>
        <p style="color:gray;">Sent automatically from your volunteer form.</p>
      `,
    };

    // 🔸 Mail to volunteer
    const volunteerMail = {
      from: `"Zeenath Foundation" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "🙏 Thank You for Volunteering!",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for showing interest in volunteering with <b>Zeenath Foundation</b>! 🌸</p>
        <p>We’ve received your details and will reach out soon.</p>
        <h3>Your Details:</h3>
        <ul>
          <li>Area: ${area}</li>
          <li>Pincode: ${pincode}</li>
          <li>Graduation/Studying In: ${graduation}</li>
          <li>Contact: ${contact}</li>
        </ul>
        <p>Warm regards,<br/>The Zeenath Foundation Team</p>
      `,
    };

    // 🔹 Send both mails in parallel
    await Promise.all([
      transporter.sendMail(ownerMail),
      transporter.sendMail(volunteerMail),
    ]);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Volunteer API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send emails" }),
      { status: 500 }
    );
  }
}
