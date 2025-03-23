<script lang="ts">
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
	import FaqSection from '$lib/components/faq/FaqSection.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
	import SvelteSeo from 'svelte-seo';
	export let data: {
		faqs: {
			question: string;
			answer: string;
		}[];
	};

	const { faqs } = data;
</script>
<SvelteSeo
	title="FAQ - Tyendinaga Township Public Library"
	description="Find answers to your most common questions."
	canonical="https://ttpl.ca/faq"
	keywords="tyendinaga, shannonville, belleville, ontario, library, books, events, community, resources"/>
	
<main class="bg-base-100">
	<!-- Hero Section -->
     <PageHeader title="FAQ" subtitle="Find answers to your most common questions." />

	<MaxWidthContainer>
		<FaqSection {faqs} />
	</MaxWidthContainer>
</main>
