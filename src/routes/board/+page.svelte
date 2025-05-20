<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import BoardMembers from '$lib/components/board/BoardMembers.svelte';
	import LibraryPolicies from '$lib/components/board/LibraryPolicies.svelte';
	import MeetingMinutes from '$lib/components/board/MeetingMinutes.svelte';
	import SvelteSeo from 'svelte-seo';

	export let data: {
		boardMembers: {
			name: string;
			role: string;
			order: number;
		}[];
		policies: {
			name: string;
			pdf: string;
		}[];
		meetingMinutes: {
			date: string;
			fileLink: string;
		}[];
		meetingAgendas: {
			date: string;
			fileLink: string;
		}[];
	};

	const { boardMembers, policies, meetingMinutes, meetingAgendas } = data;
</script>

<SvelteSeo
	title="Library Board - Tyendinaga Township Public Library"
	description="Meet our board members, view our policies, and access meeting minutes."
	canonical="https://ttpl.ca/board"
	keywords="tyendinaga, shannonville, belleville, ontario, library, books, events, community, resources"
/>

<PageHeader
	title="Library Board"
	subtitle="Meet our board members, view our policies, and access meeting minutes."
/>

<main class="bg-base-100">
	<div class="container mx-auto px-4 py-8">
		<BoardMembers members={boardMembers} />
		{#if meetingAgendas.length > 0}
			<MeetingMinutes meeting={meetingAgendas} isAgenda={true} />
		{/if}
		<MeetingMinutes meeting={meetingMinutes} isAgenda={false} />
		<LibraryPolicies {policies} />
	</div>
</main>
