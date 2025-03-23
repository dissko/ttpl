<script lang="ts">
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ActivityItem from '$lib/components/activities/ActivityItem.svelte';

	// Types
	export let data: {
		activities: {
			title: string;
			subtitle?: string;
			description?: string;
			image?: string;
			link?: string;
			buttonText: string;
		}[];
	};

	const { activities } = data;
</script>

<!-- Page Header -->
<PageHeader
	title="Library Activities"
	subtitle="Explore our dynamic range of programs and activities. Watch this space for for new offerings and updates!"
/>

<MaxWidthContainer>
	<main class="bg-base-100 py-8">
		<div class="container mx-auto">
			{#each activities as activity, index}
				<!-- Alternate layout: reverse layout for even-indexed items -->
				<ActivityItem
					title={activity.title}
					subtitle={activity.subtitle}
					description={activity.description}
					image={activity.image}
					reverse={index % 2 !== 0}
					link={activity.link}
					buttonText={activity.buttonText}
				/>
			{/each}
		</div>
	</main>
</MaxWidthContainer>
