<script>
    import { onMount } from 'svelte';
    const username = import.meta.env.VITE_GITHUB_USERNAME;
    const repoName = import.meta.env.VITE_REPO_NAME;
    const filePath = import.meta.env.VITE_FILE_PATH;
    const token = import.meta.env.VITE_GITHUB_TOKEN;
  let count = 0;
  let error = ''
  let resave = 'S';
  let base = "B";
  let sha = "H";


  onMount(async () => {
    const url = `https://api.github.com/repos/${username}/${repoName}/contents/${filePath}`;

    try {
      // GET current file
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
      const data = await response.json();

      const decoded = atob(data.content);
      resave = decoded;
      const match = decoded.match(/(^|\n)count:\s*(\d+)/);
      if (!match) throw new Error('count not found');
      const current = parseInt(match[2], 10);
      count = current + 1;

      const updated = decoded.replace(/(^|\n)(count:\s*)\d+/, `$1$2${count}`);
      base = btoa(updated);
      sha = data.sha;

      // PUT updated file
      const responseagain = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: 'update with new count',
          content: base,
          sha,
        }),
      });
      if (!responseagain.ok) throw new Error(`Save failed: ${responseagain.status}`);
      await responseagain.json();
    } catch (e) {
      console.error(e);
      error = 'Failed to update traffic count';
    }
});

</script>

<div class="traffic-counter">
  <h1>Traffic Count: {count}</h1>
  {#if error}
    <p>{error}</p>
  {/if}
</div>

<style>
  .traffic-counter {
    text-align: center;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>
