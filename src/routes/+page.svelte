<script>
  import { onMount } from "svelte";

  onMount(() => {
    const preventDefault = (e) => e.preventDefault();

    document.body.addEventListener("touchmove", preventDefault, {
      passive: false,
    });
    document.body.addEventListener("scroll", preventDefault, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener("touchmove", preventDefault);
      document.body.removeEventListener("scroll", preventDefault);
    };
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
        alt="Logo"
        width="60"
        height="30"
        class="rounded"
        style="border-radius: 6px"
      />
    </a>
    <div class="flex items-center">
      <a href="/demo" class="mr-10">
        <span
          style="font-family: 'Nohemi'; font-weight: 300;"
          class="text-[#EFE5E5] text-[16.5px]"
        >
          explore
        </span>
      </a>
      <a href="/about" class="mr-[45px]">
        <span
          style="font-family: 'Nohemi'; font-weight: 300;"
          class="text-[#EFE5E5] text-[16.5px]"
        >
          about
        </span>
      </a>
    </div>
  </nav>

  <main class="flex-grow flex items-center justify-center">
    <div class="text-center" style="transform: translateY(-15%);">
      <h1
        style="font-family: 'Nohemi'; font-weight: 300; font-size: 70px; line-height: 1.1;"
      >
        Interact &<br />Connect
        <span class="gradient-text-freely">Freely.</span>
      </h1>
      <p
        style="font-family: 'Platypi'; font-size: 16px; color: #2E2E2E; margin-top: 5px;"
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
  /*
  :global(html, body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: linear-gradient(180deg, #548cd6 24%, #e3c7b1 100%);
    background-attachment: fixed;
    overflow: hidden;
    touch-action: none;
  }
  */
  @font-face {
    font-family: "Platypi";
    src: url("/fonts/Platypi/Platypi-VF.ttf");
  }
  @font-face {
    font-family: "Nohemi";
    src: url("/fonts/Nohemi/Nohemi-VF.ttf");
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
    font-family: "Nohemi", sans-serif;
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
