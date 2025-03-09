<!-- src/lib/components/ResourceItem.svelte -->
<script lang="ts">
    export let title: string;
    export let image: string = "";
    export let description: string = "";
    export let link: string = "";
  </script>
  
  <div class="flex flex-col sm:flex-row items-start sm:items-center border-b border-base-300 py-4">
    {#if image}
    <div class="w-30 mr-4 mb-2">
      <img src={image} alt={title} class="w-full object-cover rounded  sm:mb-0" />
    </div>
    {/if}
    <div class="flex-1">
      <h3 class="text-xl font-bold">{title}</h3>
      {#if description}
        <p class="mt-2 text-sm">{description}</p>
      {/if}
      {#if link}
        <div class="mt-2">
          <a href={link} target="_blank" class="btn btn-sm btn-primary">Learn More</a>
        </div>
      {/if}
    </div>
  </div>
  