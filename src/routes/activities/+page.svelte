<!-- src/routes/activities/+page.svelte -->
<script lang="ts">
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
import PageHeader from '$lib/components/PageHeader.svelte';
	import ActivityItem from '$lib/components/activities/ActivityItem.svelte';

	// Sample array of activities – maximum 5 items, with some optional fields
	const activities = [
		{
			title: 'Fun Time Circle',
			subtitle: 'Tuesdays & Saturdays at 10:30 am',
			description:
				'Our Fun Time Circle program offers preschool-aged children a dynamic opportunity to explore and learn through creative process art. Children engage in interactive sessions where they discover tactile play with materials like playdough, rocks, evergreen branches, and even rabbit fur. They also experience community connection through visits from local helpers who share their unique stories.',
			image: '/images/FunTime.png'
		},
		{
			title: 'Music and Motion',
			subtitle: 'Thursdays at 10:30 am',
			description:
				'Music and Motion fills the library with an atmosphere of joy, learning, and creative expression. This program not only encourages early literacy by exposing children to the rhythms and patterns of language but also builds a sense of community through shared musical activities and movement. Participants experience interactive sessions that promote vocabulary development and self-expression.',
			image: '/images/Music and Motion.png'
		},
		{
			title: '1000 Books Before Kindergarten',
			subtitle: 'Sponsored by the 1000 Books Foundation',
			description:
				'In partnership with the 1000 Books Foundation, our free program encourages parents and children to read 1,000 books before the start of kindergarten. This initiative aims to foster early literacy and a lifelong love of reading. Stop by the library for more information—membership is free, so even non-patrons are welcome to join this enriching journey. For further details, please visit the 1000 Books Foundation website.',
			image: '/images/1000 Books.png',
			link: 'https://1000booksbeforekindergarten.org/'
		}
	];
</script>

<!-- Page Header -->
<PageHeader
	title="Library Activities"
	subtitle="Explore our dynamic range of programs and activities. Watch this space for for new offerings and updates!"
	bgClass="bg-primary"
/>

<MaxWidthContainer>
<main class="bg-base-100 min-h-screen py-8">
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
			/>
		{/each}
	</div>
</main>
</MaxWidthContainer>