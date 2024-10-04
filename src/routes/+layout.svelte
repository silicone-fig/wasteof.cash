<script>
  import "../app.css";
  import { afterNavigate } from '$app/navigation';

  let background = '';

  afterNavigate(({ to }) => {
    if (to?.url.pathname === '/login') {
      background = 'linear-gradient(180deg, #659be1 0%, #dccfc5 100%)';
    } else {
      background = 'linear-gradient(180deg, #548cd6 24%, #e3c7b1 100%)';
    }
  });
</script>

<div class="app" style="background: {background};">
  <slot />
</div>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
  .app {
    min-height: 100vh;
    background-attachment: fixed;
    overflow: hidden;
    touch-action: none;
  }
</style>