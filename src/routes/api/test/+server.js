// @ts-nocheck
// pulled from my tests at siliconecb.cc (portfolio site, check it out!)
import { json } from '@sveltejs/kit';

export async function GET() {
  const fetch = await import('node-fetch').then(m => m.default);
  const response = await fetch('https://wasteof.me/db/_/');
  return json({ message: 'hello, world!' }, 200);
}