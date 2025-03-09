<!-- src/lib/components/FeatureSection.svelte -->
<script lang="ts">
    export let title: string;
    export let description: string;
    export let image: string;
    export let ctaText: string = "";
    export let ctaLink: string = "";
    export let bgColor: string = "bg-base-100";
    // direction can be "top", "bottom", "left", or "right"
    export let direction: "top" | "bottom" | "left" | "right" = "left";
  </script>
  
  <section class="hero py-4 {bgColor}" id="featured-section">
    <div class="hero-content w-full">
      {#if direction === "top"}
        <div class="flex flex-col items-center">
          <img src={image} alt={title} class="w-full max-w-sm rounded-lg mb-4" />
          <div class="max-w-md text-center">
            <h1 class="text-3xl font-semibold">{title}</h1>
            <p class="py-4">{description}</p>
            {#if ctaText && ctaLink}
              <a href={ctaLink} class="btn btn-primary">{ctaText}</a>
            {/if}
          </div>
        </div>
      {:else if direction === "bottom"}
        <div class="flex flex-col items-center">
          <div class="max-w-md text-center">
            <h1 class="text-3xl font-semibold">{title}</h1>
            <p class="py-4">{description}</p>
            {#if ctaText && ctaLink}
              <a href={ctaLink} class="btn btn-primary">{ctaText}</a>
            {/if}
          </div>
          <img src={image} alt={title} class="w-full max-w-sm rounded-lg mt-4" />
        </div>
      {:else if direction === "left"}
        <div class="flex flex-col lg:flex-row items-center">
          <div class="w-full lg:w-1/2">
            <img src={image} alt={title} class="w-full max-w-sm rounded-lg" />
          </div>
          <div class="w-full lg:w-1/2 pl-4">
            <h1 class="text-3xl font-semibold">{title}</h1>
            <p class="py-4">{description}</p>
            {#if ctaText && ctaLink}
              <a href={ctaLink} class="btn btn-primary">{ctaText}</a>
            {/if}
          </div>
        </div>
      {:else if direction === "right"}
        <div class="flex flex-col lg:flex-row items-center">
          <div class="w-full lg:w-1/2 lg:pr-4">
            <h1 class="text-3xl font-semibold">{title}</h1>
            <p class="py-4">{description}</p>
            {#if ctaText && ctaLink}
              <a href={ctaLink} class="btn btn-primary">{ctaText}</a>
            {/if}
          </div>
          <div class="w-full lg:w-1/2">
            <img src={image} alt={title} class="w-full max-w-sm rounded-lg" />
          </div>
        </div>
      {/if}
    </div>
  </section>
  