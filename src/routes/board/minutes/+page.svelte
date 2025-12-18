<script lang="ts">
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
	import SvelteSeo from 'svelte-seo';
	import MeetingMinutesList from '$lib/components/board/MeetingMinutesList.svelte';

	export let data: {
		meetingMinutes: {
			date: string;
			fileLink: string;
		}[];
	};

	const { meetingMinutes } = data;
</script>

<SvelteSeo
	title="Meeting Minutes - Tyendinaga Township Public Library"
	description="View the minutes from our Library Board meetings."
	canonical="https://ttpl.ca/board/minutes"
	keywords="tyendinaga, shannonville, belleville, ontario, library, books, events, community, resources"
/>
<MaxWidthContainer>
	<div class="breadcrumbs p-4 text-sm">
		<ul>
			<li><a href="/board">Library Board</a></li>
			<li>Meeting Minutes</li>
		</ul>
	</div>
	<main class="bg-base-100">
		<div class="container mx-auto my-4 px-4">
			<MeetingMinutesList minutes={meetingMinutes} />
		</div>
	</main>
</MaxWidthContainer>
