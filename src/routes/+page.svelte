<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let uhhcontent;

  onMount(() => {
    // wow i did a gsap
    gsap
      .timeline()
      .from(uhhcontent.querySelector("h1"), {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out",
      })
      .from(
        uhhcontent.querySelector("p"),
        {
          duration: 0.8,
          y: 20,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        uhhcontent.querySelector(".button-container"),
        {
          duration: 1,
          y: 10,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.5"
      );
  });
</script>

<sveltekit:head>
  <title>home | wasteof.cash</title>
  <meta name="og:title" content="wasteof.cash - home" />
  <meta name="title" content="wasteof.cash - home" />

  <meta
    name="og:description"
    content="wasteof.cash - a supercharged alternative client for wasteof.money"
  />
  <meta
    name="description"
    content="wasteof.cash - a supercharged alternative client for wasteof.money"
  />
</sveltekit:head>

<div class="h-screen flex flex-col">
  <nav class="w-full pt-6 px-6 flex justify-between items-center">
    <a href="/">
      <img
        src="/brand/nav-logo.svg"
        alt="wasteof.cash logo"
        width="60"
        height="30"
        class="rounded"
        style="border-radius: 6px"
      />
    </a>
    <div class="flex items-center">
      <a href="/" class="mr-10">
        <span
          style="font-family: '__nohemi_164e0f'; font-weight: 300;"
          class="text-[#EFE5E5] text-[16.5px]"
        >
          explore
        </span>
      </a>
      <a href="/" class="mr-[45px]">
        <span
          style="font-family: '__nohemi_164e0f'; font-weight: 300;"
          class="text-[#EFE5E5] text-[16.5px]"
        >
          about
        </span>
      </a>
    </div>
  </nav>

  <main class="flex-grow flex items-center justify-center">
    <div
      class="text-center"
      style="transform: translateY(-15%);"
      bind:this={uhhcontent}
    >
      <h1
        style="font-family: '__nohemi_164e0f'; font-weight: 300; font-size: 70px; line-height: 1.1;"
      >
        Interact &<br />Connect
        <span class="gradient-text-freely">Freely.</span>
      </h1>
      <p
        style="font-family: '__platypi_5cddfa01'; font-size: 16px; color: #2E2E2E; margin-top: 5px;"
      >
        wasteof.cash is a spirited and cutting-edge alternative<br />client for
        wasteof.money with
        <span class="gradient-text-superpowers font-semibold">superpowers.</span
        ><br /><br />
        "wasteof on roids" - @siliconecb_
      </p>
      <div class="button-container mt-6">
        <a href="/login" data-sveltekit-preload-data="off">
          <button class="sign-in-button">
            <span class="button-text">Sign In ➝</span>
          </button>
        </a>
      </div>
    </div>
  </main>
</div>

<style>
  @font-face {
    font-family: "__platypi_5cddfa01";
    src: url("/static/media/_5cddfa01bed90638148169d627c0b3ae.ttf");
  }
  @font-face {
    font-family: "__nohemi_164e0f";
    src: url("/static/media/_164e0f7e37680def92131715a86af08c.ttf");
  }
  .gradient-text-freely {
    background: linear-gradient(180deg, #76958f -65%, #c7fbf1 87%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  .gradient-text-superpowers {
    position: relative;
    background: linear-gradient(180deg, #1e221f 40%, #c9cae9 155%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  .gradient-text-superpowers::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(180deg, #1e221f 40%, #c9cae9 155%);
    z-index: -1;
  }
  .button-container {
    display: flex;
    justify-content: center;
  }
  .sign-in-button {
    font-family: "__nohemi_164e0f", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: white;
    background-color: black;
    border: none;
    border-radius: 25px;
    width: 110px;
    height: 45px;
    cursor: pointer;
    position: relative;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  .button-text {
    display: inline-block;
    line-height: 1;
    transform: translateY(1px);
  }
  .sign-in-button:hover {
    background-color: #ffffff;
    color: black;
  }
</style>

