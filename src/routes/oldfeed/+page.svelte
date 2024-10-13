<script>
  import Post from "../../lib/components/posts/Post.svelte";
</script>

<sveltekit:head>
  <title>feed | wasteof.cash</title>
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
</sveltekit:head>

<div class="bg-[#16181a] h-screen">
  <Post id="60c4977c59c722b5661559c6" />
</div>

<style>
  @font-face {
    font-family: "Nohemi";
    src: url("/fonts/Nohemi/Nohemi-VF.ttf");
  }
</style>
