import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Check environment variables first
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey) {
      console.error("❌ RESEND_API_KEY is missing");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    if (!contactEmail) {
      console.error("❌ CONTACT_EMAIL is missing");

      return NextResponse.json(
        { error: "Contact email is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    // Read request body
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validate fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please complete all fields." },
        { status: 400 },
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    console.log("📨 Sending contact inquiry...");
    console.log("From:", email);
    console.log("To:", contactEmail);
    console.log("Subject:", subject);

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Website Contact Form <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `Website Inquiry: ${subject}`,
      text: `
New inquiry received from your website.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("❌ Resend error:", error);

      return NextResponse.json(
        {
          error: error.message || "Failed to send your message.",
        },
        { status: 500 },
      );
    }

    console.log("✅ Contact inquiry sent successfully:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("❌ Contact API error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
