<!-- src/lib/components/HomeHero.svelte -->
<script lang="ts">
    export let image: string;
    export let title: string;
    export let description: string;
    export let ctaText: string;
    export let ctaLink: string;
  </script>
  
  <section class="hero bg-base-100 py-16" id="hero">
    <div class="hero-content flex-col lg:flex-row">
      <!-- Left Side (Image) -->
      <img src={image} alt={title} class="w-full max-w-3xl rounded-lg shadow-2xl lg:w-1/2" />
      <!-- Right Side (Text & CTA) -->
      <div class="px-4 text-center lg:text-left">
        <h1 class="text-primary text-4xl font-bold">{title}</h1>
        <p class="py-4 text-lg text-gray-700">{description}</p>
        <a href={ctaLink} target="_blank" class="btn btn-primary">{ctaText}</a>
      </div>
    </div>
  </section>
  