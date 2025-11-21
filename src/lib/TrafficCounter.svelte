<script>
  import { onMount } from 'svelte';
  let count = 0;
  let error = 'N'
  let repo = 'R'
  let content = 'P';

export async function load({ fetch }) {
    const response = await fetch("https://api.github.com/users/nicksalt/repos");
    const repos = await response.json();
    repo = {repos}
}

  onMount(async () => {
    const response = await fetch('/src/traffice/map-count-0.md');
    content = await response.text();
  });


  onMount(async () => {
    const repoOwner = import.meta.env.VITE_GIT_REPO_OWNER;
    const repoName = import.meta.env.VITE_GIT_REPO_NAME;
    const filePath = import.meta.env.VITE_GIT_FILE_PATH;
    const accessToken = import.meta.env.VITE_GIT_ACCESS_TOKEN;
    const response = await fetch(
        'https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}',
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        }
        );
    
    if (response.ok) {
        const data = await response.json();
    } else {
        console.error('Failed to fetch json:', response.status);
        error = 'F'
    }
    count = data.count;
  });

  async function increment() {
    count++;
    const repoOwner = import.meta.env.VITE_GIT_REPO_OWNER;
    const repoName = import.meta.env.VITE_GIT_REPO_NAME;
    const filePath = import.meta.env.VITE_GIT_FILE_PATH;
    const accessToken = import.meta.env.VITE_GIT_ACCESS_TOKEN;
    await fetch('https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}', {
      method: 'POST',
      body: JSON.stringify({count}),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
</script>

<div class="traffic-counter">
  <h1>Traffic Count: {count}{error}{repo}{@html content}</h1>
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
