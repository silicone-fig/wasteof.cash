<script>
  // @ts-nocheck

  export let id;
  export let loves;
  export let comments;
  export let reposts;
  export let username;
  export let time;
  export let content;

  let image = `https://api.wasteof.me/users/${username}/picture`;
  let timestamp = formatTime(time);

  function formatTime(time) {
    const now = new Date().getTime();
    const diff = now - time;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);

    if (years > 0) return `${years}y`;
    if (months > 0) return `${months}mo`;
    if (weeks > 0) return `${weeks}w`;
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
  }
</script>

<svelte:head>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <style>
    .icon {
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
      display: inline-block;
      vertical-align: middle;
    }
    .repost-icon {
      font-size: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      display: inline-block;
      vertical-align: middle;
    }
  </style>
</svelte:head>

<div class="bg-[#1a1e24] text-gray-100 rounded-xl p-4 max-w-md w-128">
  <div class="flex flex-row items-center gap-2 mb-2">
    <img src={image} alt={`@${username}`} class="w-8 h-8 rounded-full" />
    <div class="flex flex-row items-center gap-2">
      <p class="text-sm font-semibold leading-none">{username}</p>
      <p class="text-xs text-gray-400">{timestamp}</p>
    </div>
  </div>
  <div class="p-2 flex-grow overflow-hidden">
    {@html content}
  </div>
  <div class="flex justify-start gap-4 p-2">
    <div class="flex items-center gap-1">
      <i class="bx bx-heart icon" style="color:#fff"></i>
      <span class="text-sm font-semibold">{loves}</span>
    </div>
    <div class="flex items-center gap-1">
      <i
        class="bx bxs-comment-detail icon"
        style="color:#fff; margin-top: 0.2rem"
      ></i>
      <span class="text-sm font-semibold">{comments}</span>
    </div>
    <div class="flex items-center gap-1">
      <i class="bx bx-repost repost-icon" style="color:#fff"></i>
      <span class="text-sm font-semibold">{reposts}</span>
    </div>
  </div>
</div>
