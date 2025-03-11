<script lang="ts">
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
	import FaqSection from '$lib/components/faq/FaqSection.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';

	export let data: {
		faqs: {
			question: string;
			answer: string;
		}[];
	};

	const { faqs } = data;
</script>

<main class="bg-base-100">
	<!-- Hero Section -->
     <PageHeader title="FAQ" subtitle="Find answers to your most common questions." bgClass="bg-primary" />

	<MaxWidthContainer>
		<FaqSection {faqs} />
	</MaxWidthContainer>
</main>
