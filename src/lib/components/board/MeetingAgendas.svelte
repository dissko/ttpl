<script lang="ts">
  import MeetingMinuteItem from '../../MeetingMinuteItem.svelte';
  export let meeting: { date: string; fileLink: string }[] = [];

  const heading = 'Meeting Agendas';
  const topThree = meeting.slice(0, 3);
</script>

<section class="py-8">
  <h2 class="text-3xl font-bold mb-4">{heading}</h2>

  {#if topThree.length === 0}
    <p class="text-base-content/70">No agendas available.</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each topThree as item}
        <MeetingMinuteItem date={item.date} fileLink={item.fileLink} isAgenda={true} />
      {/each}
    </div>

    <div class="mt-6 text-center">
      <a href="/board/agendas" class="btn btn-secondary">View All Meeting Agendas</a>
    </div>
  {/if}
</section>
