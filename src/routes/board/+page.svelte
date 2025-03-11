<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import BoardMembers from '$lib/components/board/BoardMembers.svelte';
	import LibraryPolicies from '$lib/components/board/LibraryPolicies.svelte';
	import MeetingMinutes from '$lib/components/board/MeetingMinutes.svelte';

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
	};

	const { boardMembers, policies, meetingMinutes } = data;
</script>

<PageHeader
	title="Library Board"
	subtitle="Meet our board members, view our policies, and access meeting minutes."
/>

<main class="bg-base-100">
	<div class="container mx-auto px-4 py-8">
		<BoardMembers members={boardMembers} />
		<MeetingMinutes minutes={meetingMinutes} />
		<LibraryPolicies {policies} />
	</div>
</main>
