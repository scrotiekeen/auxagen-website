import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const serviceLabels: Record<string, string> = {
  strategy: "AI Strategy Consulting",
  build: "Website & App Development",
  analytics: "Data Analytics & Dashboards",
  support: "Ongoing Support & Retainers",
  unsure: "Not sure yet — needs guidance",
};

const teamLabels: Record<string, string> = {
  solo: "Just me",
  small: "2-10 people",
  medium: "11-50 people",
  large: "50+ people",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { service, teamSize, name, email, message } = body;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured. Please contact us directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!service || !serviceLabels[service]) {
      return NextResponse.json({ error: "Please select a service." }, { status: 400 });
    }
    if (!teamSize || !teamLabels[teamSize]) {
      return NextResponse.json({ error: "Please select a team size." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Auxano Contact <onboarding@resend.dev>",
      to: "corcolt2114@gmail.com",
      subject: `New Auxano Lead: ${name} — ${serviceLabels[service]}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceLabels[service]}</p>
        <p><strong>Team Size:</strong> ${teamLabels[teamSize]}</p>
        <p><strong>Message:</strong> ${message || "No message provided."}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
