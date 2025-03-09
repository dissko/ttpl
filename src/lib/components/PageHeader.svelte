<!-- src/lib/components/PageHeader.svelte -->
<script lang="ts">
  export let title: string;
  export let subtitle: string = "";
  export let bgClass: string = "bg-primary";
</script>

<section class="hero {bgClass} py-16">
  <div class="hero-content text-center">
    <div class="max-w-2xl">
      <h1 class="text-5xl font-bold text-white">{title}</h1>
      {#if subtitle}
        <p class="text-white mt-4">{subtitle}</p>
      {/if}
    </div>
  </div>
</section>
