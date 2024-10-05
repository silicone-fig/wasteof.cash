import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const body = await request.json();
  if (!body || body.intentions !== 'authenticate') {
    return json({ error: 'invalid intentions' }, 401);
  }

  const { usr, pswd } = body;
  if (!usr || !pswd) {
    return json({ error: 'username and password are required >:(' }, 401);
  }

  const fetch = await import('node-fetch').then(m => m.default);
  const apiResponse = await fetch('https://api.wasteof.money/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: usr, password: pswd })
  });

  const apiResponseBody = await apiResponse.json();
  return json(apiResponseBody, apiResponse.status);
}
