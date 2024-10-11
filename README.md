![gh banner hero](static/brand/banner.png)

<p align="center">
	<h1 align="center"><b>wasteof.cash</b></h1>
<p align="center">
    a supercharged alternative client for wasteof.money
    <br />
    <br />
    <a href="https://cash.wasteof.me">website</a>
    ·
    <a href="https://cash.wasteof.me/about">about</a>
    ·
    <a href="https://cash.wasteof.me/login">sign in</a>
    ·
    <a href="https://wasteof-cash.wasteof.me">wasteof profile</a>
  </p>
  <br />
  <br />
</p>
  
wasteof.cash is a spirited and cutting-edge alternative
client for wasteof.money with superpowers.

- pretty ui ✨
- real-time post stats
- post scheduling
- extended top users
- messages + group chats
- post bookmarks
- better filters on search/explore

## disclaimer

> this project is still in beta and under active development, major and potentially catastrophic changes may occur occasionally. if you find any bugs or security vulnerabilities, open a PR/issue for bugs and report to the appropriate contact methods at <a href="https://cash.wasteof.me/security">/security.txt</a> for security vulns.

## the stack 😎

- **SvelteKit** - the website
- **Hono** - event/backend api
- **Postgres** - stores information on features specific to wasteof.cash
- **Drizzle ORM** - bridges the database and frontend

### more

- TailwindCSS
- Shadcn-svelte
- GSAP

## beta testing
the site will be open to select beta testers soon, stay tuned!

## roadmap
- [x] landing page
- [x] login page
- [x] database setup
- [ ] feed page
- [ ] real-time post stats
- [ ] explore, search, messages, profiles, and settings page
- [ ] post bookmarks
- [ ] extended explore page
- [ ] post scheduling
> - [ ] feed de-clutterer with AI 👀

# privacy
wasteof.cash does not store wasteof.money credentials under any circumstances¹, read the <a href="https://cash.wasteof.me/privacy">privacy policy</a> for more details.

> ¹wasteof.cash will only ever store user tokens temporarily ONLY when given express permission by the user to post to wasteof.money at a later date (post scheduling feature)

## contributing
open a pull request or just yell at me about bugs lol

## development

```bash
npm run generate
npm run migrate
vite build
vite dev --host
```
