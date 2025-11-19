<script>
  import { onMount } from 'svelte';
  let count = 0;

  onMount(async () => {
    const response = await fetch('/api/traffic');
    const data = await response.json();
    count = data.count;
  });

  async function increment() {
    count++;
    await fetch('/api/traffic', {
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
