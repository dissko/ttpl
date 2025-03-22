<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import FeaturedCard from '$lib/components/FeaturedCard.svelte';
	import FeatureSection from '$lib/components/home/FeatureSection.svelte';
	import type { HomepageItem } from '$lib';
	// The load function's return value is available as data in the page store
	export let data: {
		featuredEvents: any[];
		featuredActivities: any[];
		homepageItems: HomepageItem[];
	};

	// Optionally, combine both featured events and activities into one array
	const featuredCards = [...data.featuredEvents, ...data.featuredActivities];
</script>

<!-- Top Hero Section -->
<HomeHero
	image="/hero.jpg"
	title="Welcome to the Tyendinaga Township Public Library"
	description="Your hub for books, events, and community resources. Follow us on Facebook for the latest updates!"
	ctaText="Visit Our Facebook Page"
	ctaLink="https://www.facebook.com/YOUR_LIBRARY_PAGE"
/>

<!-- Featured Events and Activities -->
<section id="activities" class="bg-base-200 px-4 py-8">
	<MaxWidthContainer>
		<h1 class="mb-4 text-lg font-semibold">Featured Events and Activities</h1>
		<div class="grid grid-cols-1 justify-items-center gap-4 px-2 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredCards as card}
				<FeaturedCard
					image={card.image}
					title={card.title}
					description={card.description}
					buttonText={card.buttonText}
					buttonLink={card.link}
					date={card.date}
				/>
			{/each}
		</div>
	</MaxWidthContainer>
</section>

{#each data.homepageItems as homePageItem, index}
	<FeatureSection
		title={homePageItem.title}
		description={homePageItem.description}
		image={homePageItem.image}
		direction={homePageItem.imageOrientation}
		ctaText={homePageItem.buttonText}
		ctaLink={homePageItem.buttonUrl}
		bgColor={index % 2 === 1 ? 'bg-base-200' : 'bg-base-100'}
	></FeatureSection>
{/each}
