<!-- src/lib/components/MeetingMinuteItem.svelte -->
<script lang="ts">
    export let date: string;
    export let fileLink: string;
    export let isAgenda: boolean = false; // New prop to differentiate between minutes and agendas

    // title should be "Upcoming Board Meeting" for agendas, otherwise "Meeting Minutes - MMMM YYYY"
    let dateTitle = new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const title = isAgenda
        ? `Upcoming Board Meeting - ${dateTitle}`
        : `Board Meeting- ${dateTitle}`;

    // display Date should be DayOfWeek MMMM DD, YYYY
    const displayDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    });
</script>

<div class="card bg-base-100 shadow-md">
    <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <p class="text-sm text-gray-600">{displayDate}</p>
        <div class="card-actions justify-end">
            <a href={fileLink} target="_blank" class="btn btn-primary btn-sm">Download</a>
        </div>
    </div>
</div>
