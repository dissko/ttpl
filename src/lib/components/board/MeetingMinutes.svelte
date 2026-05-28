<!-- src/lib/components/MeetingMinutes.svelte -->
<script lang="ts">
    import MeetingMinuteItem from './MeetingMinuteItem.svelte';
    export let meeting: { date: string; fileLink: string }[];

    // Infer CEO status from data. Supports an explicit item.isCeo boolean or a fileLink containing 'ceo'.
    // This keeps compatibility if data starts including an isCeo flag.
    const inferIsCeo = (item: any) => {
        const link: string = item?.fileLink ?? '';
        const explicit: boolean = Boolean(item?.isCeo);

        // Check various potential metadata fields for source path or collection
        const collection: string = (item?.collection ?? '').toString();
        const pathA: string = (item?._path ?? '').toString();
        const pathB: string = (item?.path ?? '').toString();
        const pathC: string = (item?.filePath ?? '').toString();
        const fromContentFolder = /content\/(ceo-reports|ceo_reports|ceo)/i;

        const pathMatches =
            fromContentFolder.test(collection) ||
            fromContentFolder.test(pathA) ||
            fromContentFolder.test(pathB) ||
            fromContentFolder.test(pathC);

        const linkMatches = /(^|\/)ceo(\b|\/|\.)/i.test(link);

        return explicit || pathMatches || linkMatches;
    };

    // Determine if this section is CEO reports (majority or all items inferred as CEO)
    const ceoCount = meeting?.filter(inferIsCeo).length ?? 0;
    const isCeoSection = ceoCount > 0 && ceoCount >= (meeting?.length ?? 0) / 2;

    const heading = isCeoSection ? 'CEO Reports' : 'Meeting Minutes';
</script>

<section class="py-8">
    <h2 class="text-3xl font-bold mb-4">{heading}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {#each meeting.slice(0, 3) as minute}
            <MeetingMinuteItem
                date={minute.date}
                fileLink={minute.fileLink}
                isCeo={inferIsCeo(minute)}
            />
        {/each}
    </div>
    {#if !isCeoSection}
    <div class="mt-6 text-center">
        <a href="/board/minutes" class="btn btn-secondary">View All Meeting Minutes</a>
    </div>
    {/if}
</section>
