<script lang="ts">
    export let title: string;
    export let subtitle: string = "";
    export let image: string | undefined;
    export let description: string | undefined;
    export let link: string | undefined;
  // If reverse is true, the image appears on the right on large screens.
  export let reverse: boolean = false;
</script>

<section class="hero py-12 bg-base-100">
  <div class="hero-content flex-col lg:flex-row {reverse ? 'lg:flex-row-reverse' : ''} items-center">
    <!-- Image Section -->
    <div class="w-full lg:w-1/2 flex-shrink-0">
      {#if image}
        <img src={image} alt={title} class="rounded-lg shadow-xl w-full object-cover" />
      {/if}
    </div>
    <!-- Text Section -->
    <div class="w-full lg:w-1/2">
      <h2 class="text-4xl font-bold">{title}</h2>
      {#if subtitle}
        <h3 class="text-2xl text-primary mt-2">{subtitle}</h3>
      {/if}
      <p class="mt-4">{description}</p>
      {#if link}
        <a href={link} class="btn btn-primary mt-4">Learn More</a>
      {/if}
    </div>
  </div>
</section>