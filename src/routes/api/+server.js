// @ts-nocheck
import { json } from '@sveltejs/kit';

export async function GET() {
  const uptime = process.uptime();
  
  const youupbabe = {
    "ok": "ok",
    "frontend": "https://cash.wasteof.me",
    "uptime": uptime
  };

  return json(youupbabe, 200);
}
