<!-- src/lib/components/FeaturedCard.svelte -->
<script lang="ts">
    export let title: string;
    export let image: string = "";
    export let description: string = "";
    export let buttonText: string = "";
    export let buttonLink: string = "";
  </script>
  
  <div class="card bg-base-100 w-full max-w-sm shadow-sm">
    {#if image}
      <figure>
        <img src={image} alt={title} />
      </figure>
    {/if}
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      {#if description}
        <p>{description}</p>
      {/if}
      {#if buttonText && buttonLink}
        <div class="card-actions justify-end">
          <button class="btn btn-primary" on:click={() => window.open(buttonLink, '_blank')}>
            {buttonText}
          </button>
        </div>
      {/if}
    </div>
  </div>
  