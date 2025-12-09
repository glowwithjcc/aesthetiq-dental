import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate webhook URL
    if (!process.env.GOOGLE_SHEETS_WEBHOOK) {
      throw new Error("Missing webhook URL");
    }

    // Send request to Google Sheets
    const response = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (result.status !== "ok") {
      console.error("Google Script Error:", result);
      return NextResponse.json(
        { error: "Google script failed", detail: result },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Booking saved" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
