<script>
  let count = 0;

  const increment = () => {
    count += 1;
  };

  const reset = () => {
    count = 0;
  };
</script>

<div class="traffic-counter">
  <h1>Traffic Count: {count}</h1>
  <button on:click={increment}>Add Visitor</button>
  <button on:click={reset}>Reset Count</button>
</div>

<style>
  .traffic-counter {
    text-align: center;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  button {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
  }
</style>
