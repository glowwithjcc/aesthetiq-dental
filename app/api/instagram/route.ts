import { NextResponse } from "next/server";

const TOKEN = process.env.INSTAGRAM_TOKEN;

export async function GET() {
  const url =
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink&access_token=${TOKEN}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch Instagram data" });
  }
}
