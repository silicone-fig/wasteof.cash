<script>
  import { goto } from "$app/navigation";
  import { toast, Toaster } from 'svelte-sonner';
  import { fade } from "svelte/transition";
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  

  let username = "";
  let password = "";
  let errorMessage = ""; // error carried forward

  async function signmeinpls() {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intentions: "authenticate",
          usr: username,
          pswd: password,
        }),
      });

      const data = await response.json();

      if (data.token) {
        document.cookie = `token=${data.token}; path=/`;
        goto("/feed");
      } else if (data.error) {
        errorMessage = data.error;
      }
    } catch (error) {
      console.error("error:", error);
      errorMessage = "noo error occured, try again later";
    }
  }

  // @ts-ignore
  function fadeoutsuperkool(node) {
    const timer = setTimeout(() => {
      errorMessage = "";
    }, 3000);

    return {
      destroy() {
        clearTimeout(timer);
      },
    };
  }

  onMount(() => {
    if (browser) {
      const cookies = document.cookie.split(';');
      const uhbadsesh = cookies.some(cookie => cookie.trim().startsWith('inv_sesh=true'));
      
      if (uhbadsesh) {
        toast.error('invalid session, log in!');
        
        document.cookie = 'inv_sesh=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }
    }
  });
</script>

<sveltekit:head>
  <title>login | wasteof.cash</title>
  <meta name="og:title" content="wasteof.cash - feed" />
  <meta name="title" content="wasteof.cash - feed" />

  <meta
    name="og:description"
    content="this is your feed, decluttered and personalized for you."
  />
  <meta
    name="description"
    content="this is your feed, decluttered and personalized for you."
  />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
</sveltekit:head>

<Toaster expand={false} richColors position="bottom-right" />
<div class="h-screen flex flex-col">
  <nav class="w-full pt-6 px-6 flex justify-between items-center">
    <a
      href="/"
      class="flex items-center"
      data-sveltekit-preload-data="off"
      style="position: relative; z-index: 10;"
    >
      <img
        src="/brand/nav-logo-bright.svg"
        alt="wasteof.cash logo"
        width="60"
        height="30"
        class="rounded"
        style="border-radius: 6px"
      />
    </a>
  </nav>

  <main class="flex-grow flex items-center justify-center -mt-20 relative">
    <form
      class="bg-white rounded-[2rem] w-80 h-[400px] relative flex flex-col items-center"
      on:submit|preventDefault={signmeinpls}
    >
      <img
        src="/img/wombat.png"
        alt="wombat :)"
        class="absolute top-5 left-1/2 -translate-x-1/2 w-12 h-12 object-contain opacity-85"
      />
      <h2
        style="font-family: 'Nohemi'; font-weight: 500; font-size: 16px;"
        class="mt-16 text-black"
      >
        Welcome Back!
      </h2>
      <p
        style="font-family: 'Nohemi'; font-weight: 400; font-size: 11.5px; color: #727272;"
        class="mt-2 text-center px-4"
      >
        Sign in with your username and password.
      </p>
      <div class="w-full px-8 mt-4">
        <div class="relative mb-4">
          <i
            class="bx bxs-user absolute left-3 top-1/2 -translate-y-1/2"
            style="color:#9c9696"
          ></i>
          <input
            type="text"
            placeholder="username"
            bind:value={username}
            class="w-full py-1 pl-10 pr-3 rounded-lg bg-[#E7E7E7] text-[#7D7979] placeholder-[#7D7979] focus:outline-none"
            style="font-family: 'Nohemi'; font-weight: 300; font-size: 14px;"
          />
        </div>
        <div class="relative">
          <i
            class="bx bxs-lock-alt absolute left-3 top-1/2 -translate-y-1/2"
            style="color:#9c9696"
          ></i>
          <input
            type="password"
            placeholder="password"
            bind:value={password}
            class="w-full py-1 pl-10 pr-3 rounded-lg bg-[#E7E7E7] text-[#7D7979] placeholder-[#7D7979] focus:outline-none"
            style="font-family: 'Nohemi'; font-weight: 300; font-size: 14px;"
          />
        </div>
        <button
          type="submit"
          class="w-full py-1 rounded-lg bg-[#1E1E1E] text-white focus:outline-none hover:bg-[#2A2A2A] transition-colors duration-200 mt-6"
          style="font-family: 'Nohemi'; font-weight: 400; font-size: 14px;"
        >
          Sign In
        </button>
        {#if errorMessage}
          <p
            class="text-red-500 mt-2 text-center"
            style="font-family: 'Nohemi'; font-size: 12px;"
            transition:fade={{ duration: 100 }}
            use:fadeoutsuperkool
          >
            {errorMessage}
          </p>
        {/if}
      </div>
    </form>
  </main>
</div>

<style>
  @font-face {
    font-family: "Nohemi";
    src: url("/fonts/Nohemi/Nohemi-VF.ttf");
  }
</style>
