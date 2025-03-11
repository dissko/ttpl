<script lang="ts">
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import MeetingMinutesList from '$lib/components/board/MeetingMinutesList.svelte';

	export let data: {
		meetingMinutes: {
			date: string;
			fileLink: string;
		}[];
	};

	const { meetingMinutes } = data;
</script>

<MaxWidthContainer>
	<div class="breadcrumbs py-4 text-sm">
		<ul>
			<li><a href="/board">Library Board</a></li>
			<li>Meeting Minnutes</li>
		</ul>
	</div>
</MaxWidthContainer>
<main class="bg-base-100 min-h-screen">
	<div class="container mx-auto my-4 px-4">
		<MeetingMinutesList minutes={meetingMinutes} />
	</div>
</main>
