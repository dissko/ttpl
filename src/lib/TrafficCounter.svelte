<script>
  import { onMount } from 'svelte';
  let count = 0;

  onMount(async () => {
    const repoOwner = import.meta.env.VITE_GIT_REPO_OWNER;
    const repoName = import.meta.env.VITE_GIT_REPO_NAME;
    const filePath = import.meta.env.VITE_GIT_FILE_PATH;
    const accessToken = import.meta.env.VITE_GIT_ACCESS_TOKEN;
    const response = await fetch('https://api.github.com/repos/nicksalt/ttpl/contents/src/traffic');
    const data = await response.json();
    count = data.count;
  });

  async function increment() {
    count++;
    await fetch('https://api.github.com/repos/nicksalt/ttpl/contents/src/traffic', {
      method: 'POST',
      body: JSON.stringify({ count }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
</script>

<div class="traffic-counter">
  <h1>Traffic Count: {count}</h1>
  <button on:click={increment}>Increment</button>
</div>

<style>
  .traffic-counter {
    text-align: center;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>
