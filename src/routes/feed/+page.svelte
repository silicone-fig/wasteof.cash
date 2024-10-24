<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Skeleton } from "$lib/components/ui/skeleton/index.js";

  let username = "";
  let avatarUrl = "";

  async function isrealtoken() {
    if (!browser) return;

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token) {
      try {
        const response = await fetch("https://api.wasteof.money/session", {
          headers: {
            Authorization: token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          username = data.user.name;
          avatarUrl = `https://api.wasteof.me/users/${username}/picture`;
        } else {
          invalidtokensignout();
        }
      } catch (error) {
        console.error(
          "you have an invalid token or there was an error fetching:",
          error
        );
        invalidtokensignout();
      }
    }
  }

  function invalidtokensignout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if (browser) {
      window.location.reload();
    }
  }

  onMount(() => {
    isrealtoken();
  });
</script>

<sveltekit:head>
  <title>feed | wasteof.cash</title>
  <meta name="og:title" content="wasteof.cash - feed" />
  <meta name="title" content="wasteof.cash - feed" />
  <meta
    name="og:description"
    content="this is your feed, supercharged, decluttered, and personalized for you."
  />
  <meta
    name="description"
    content="this is your feed, supercharged, decluttered, and personalized for you."
  />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
</sveltekit:head>

<div class="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
  <div
    class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full max-w-[3840px] h-[10vw] max-h-[400px] min-h-[200px] bg-[url('/styling/glow.png')] bg-cover bg-no-repeat bg-top"
  ></div>
</div>

<div class="bg-[#1F2124] min-h-screen relative">
  <nav
    class="w-full pt-8 px-14 flex flex-col justify-start items-start relative z-10"
  >
    <a
      href="/"
      class="flex items-center relative z-10 mb-8"
      data-sveltekit-preload-data="off"
    >
      <img
        src="/brand/nav-logo-bright.svg"
        alt="wasteof.cash logo"
        width="60"
        height="30"
        class="rounded-md"
      />
    </a>

    <div class="flex flex-col space-y-3 text-white text-lg pl-2">
      <a href="/feed" class="flex items-center space-x-3">
        <i class="bx bx-home-alt nav-icon" style="color:#7BB0FF"></i>
        <span
          style="font-family: '__nohemi_164e0f'; font-weight: 500; font-size: 16px; color: #7BB0FF"
        >
          feed
        </span>
      </a>
      <a href="/explore" class="flex items-center space-x-3">
        <i class="bx bx-search nav-icon" style="color:#ffffff"></i>
        <span
          style="font-family: '__nohemi_164e0f'; font-weight: 400; font-size: 16px; color: #ffffff"
        >
          explore
        </span>
      </a>
      <a href="/bookmarks" class="flex items-center space-x-3">
        <i class="bx bx-bookmark nav-icon" style="color:#ffffff"></i>
        <span
          style="font-family: '__nohemi_164e0f'; font-weight: 400; font-size: 16px; color: #ffffff"
        >
          bookmarks
        </span>
      </a>
      <a href="/messages" class="flex items-center space-x-3">
        <i class="bx bx-message nav-icon" style="color:#ffffff"></i>
        <span
          style="font-family: '__nohemi_164e0f'; font-weight: 400; font-size: 16px; color: #ffffff"
        >
          messages
        </span>
      </a>
    </div>
  </nav>
  <div class="absolute top-8 right-14">
    <Avatar.Root class="w-9 h-9">
      {#if avatarUrl}
        <Avatar.Image src={avatarUrl} alt={`@${username}`} />
      {:else}
        <Avatar.Fallback
          ><Skeleton
            class="h-8 w-8 rounded-full bg-gray-500 dark:bg-gray-700"
          /></Avatar.Fallback
        >
      {/if}
    </Avatar.Root>
  </div>
</div>

<style>
  @font-face {
    font-family: "__nohemi_164e0f";
    src: url("/static/media/_164e0f7e37680def92131715a86af08c.ttf");
  }

  .flex.items-center {
    display: flex;
    align-items: center;
  }

  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  .bx-home-alt {
    transform: translateY(-1.5px);
  }

  .bx-search {
    transform: translateY(0px);
  }

  .bx-bookmark {
    transform: translateY(-1px);
  }

  .bx-message {
    transform: translateY(0px);
  }
</style>
