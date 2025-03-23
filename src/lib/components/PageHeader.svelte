<!-- src/lib/components/PageHeader.svelte -->
<script lang="ts">
  export let title: string;
  export let subtitle: string = "";
  export let bgClass: string = "bg-base-200";
  export let textColor: string = "text-black";
</script>

<section class="hero {bgClass} py-16">
  <div class="hero-content text-center">
    <div class="max-w-2xl">
      <h1 class="text-5xl font-bold {textColor}">{title}</h1>
      {#if subtitle}
        <p class="{textColor} mt-4">{subtitle}</p>
      {/if}
    </div>
  </div>
</section>
