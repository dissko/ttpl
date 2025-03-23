<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Library Calendar - Tyendinaga Township Public Library"
	description="Stay up to date with our events and programs."
	canonical="https://ttpl.ca/calendar"
	keywords="tyendinaga, shannonville, belleville, ontario, library, books, events, community, resources"
/>

<main class="bg-base-100">
	<!-- Hero Section -->
	<PageHeader title="Calendar" subtitle="Stay up to date with our events and programs." />

	<!-- Calendar Embed -->
	<section class="px-4 py-10">
		<div class="container mx-auto">
			<div class="overflow-hidden rounded-lg shadow-lg">
				<iframe
					title="Library Calendar"
					src="https://www.google.com/calendar/embed?src=tyendinagatwplibrary%40gmail.com&ctz=America/Toronto"
					style="border:0"
					width="100%"
					height="600"
					frameborder="0"
					scrolling="no"
				>
				</iframe>
			</div>
		</div>
	</section>
</main>
