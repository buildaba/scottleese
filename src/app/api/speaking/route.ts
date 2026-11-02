import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, organization, eventType, audienceSize, eventDate, budget, details } = body;

    if (!name || !email || !organization) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("=== NEW SPEAKING INQUIRY ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Organization: ${organization}`);
    console.log(`Event Type: ${eventType || "N/A"}`);
    console.log(`Audience Size: ${audienceSize || "N/A"}`);
    console.log(`Event Date: ${eventDate || "N/A"}`);
    console.log(`Budget: ${budget || "N/A"}`);
    console.log(`Details: ${details || "N/A"}`);
    console.log("============================");

    return NextResponse.json(
      { success: true, message: "Speaking inquiry received" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
