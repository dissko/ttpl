<script lang="ts">
  import MeetingMinuteItem from './MeetingMinuteItem.svelte';
  export let reports: { date: string; fileLink: string }[] = [];

  const heading = 'CEO Reports';
  const topThree = reports.slice(0, 3);
</script>

<section class="py-8">
  <h2 class="text-3xl font-bold mb-4">{heading}</h2>

  {#if topThree.length === 0}
    <p class="text-base-content/70">No CEO reports available.</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each topThree as item}
        <MeetingMinuteItem date={item.date} fileLink={item.fileLink} isCeo={true} />
      {/each}
    </div>


  {/if}
</section>
