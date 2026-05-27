<!-- src/lib/components/MeetingMinuteItem.svelte -->
<script lang="ts">
    export let date: string;
    export let fileLink: string;
    export let isAgenda: boolean = false; // New prop to differentiate between minutes and agendas
    export let isCeo: boolean = false; // New prop to differentiate between minutes and CEO report

    // title should be "Upcoming Board Meeting" for agendas, "CEO Reports" for CEO reports, otherwise "Meeting Minutes - MMMM YYYY"
    const dateTitle = new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const title = isAgenda
        ? `Upcoming Board Meeting - ${dateTitle}`
        : isCeo
        ? `CEO Reports - ${dateTitle}`
        : `Meeting Minutes - ${dateTitle}`;

    // display Date should be DayOfWeek MMMM DD, YYYY (leave unchanged)
    const displayDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    });

    const buttonLabel = isAgenda ? 'View Agenda' : (isCeo ? 'View Report' : 'Download');
</script>

<div class="card bg-base-100 shadow-md">
    <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <p class="text-sm text-gray-600">{displayDate}</p>
        <div class="card-actions justify-end">
            <a href={fileLink} target="_blank" class="btn btn-primary btn-sm">{buttonLabel}</a>
        </div>
    </div>
</div>
