/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const response = await resolve(event);

  if (
    event.url.pathname === "/terms.txt" ||
    event.url.pathname === "/privacy.txt" ||
    event.url.pathname === "/robots.txt" ||
    event.url.pathname === "/security.txt" ||
    event.url.pathname === "/humans.txt"
  ) {
    response.headers.set("Cache-Control", "no-cache, must-revalidate");
  }

  return response;
}
