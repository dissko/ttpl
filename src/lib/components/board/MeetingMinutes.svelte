<!-- src/lib/components/MeetingMinutes.svelte -->
<script lang="ts">
    import MeetingMinuteItem from './MeetingMinuteItem.svelte';
    export let meeting: { date: string; fileLink: string }[];
    export let isAgenda: boolean = false; // New prop to differentiate between minutes and agendas
</script>

<section class="py-8">
    <h2 class="text-3xl font-bold mb-4">{isAgenda ? 'Meeting Agendas' : 'Meeting Minutes'}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {#each meeting.slice(0, 3) as minute}
            <MeetingMinuteItem date={minute.date} fileLink={minute.fileLink} isAgenda={isAgenda} />
        {/each}
    </div>
    {#if !isAgenda}
        <div class="mt-6 text-center">
            <a href="/board/minutes" class="btn btn-secondary">View All Meeting Minutes</a>
        </div>
    {/if}
</section>
