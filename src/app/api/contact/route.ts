import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, website, plan, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // In production, this would send an email via Resend, SendGrid, etc.
    // For now, log and return success
    console.log("=== NEW ADVISORY INQUIRY ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company}`);
    console.log(`Website: ${website || "N/A"}`);
    console.log(`Plan: ${plan || "Not specified"}`);
    console.log(`Message: ${message}`);
    console.log("============================");

    // TODO: Integrate with email service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@thescottleese.com',
    //   to: 'scott@scottleeseconsulting.com',
    //   subject: `New Advisory Inquiry from ${name} at ${company}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>...`
    // });

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
