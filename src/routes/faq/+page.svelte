<script lang="ts">
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
	import FaqSection from '$lib/components/faq/FaqSection.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
	import Page from '../+page.svelte';
	const faqs = [
		{
			question: 'How do I create an account?',
			answer:
				"Click the 'Sign Up' button in the top right corner and follow the registration process."
		},
		{
			question: 'I forgot my password. What should I do?',
			answer:
				"Click on 'Forgot Password' on the login page and follow the instructions sent to your email."
		},
		{
			question: 'How do I update my profile information?',
			answer: "Go to 'My Account' settings and select 'Edit Profile' to make changes."
		}
	];
</script>

<main class="bg-base-100 min-h-screen">
	<!-- Hero Section -->
     <PageHeader title="FAQ" subtitle="Find answers to your most common questions." bgClass="bg-primary" />

	<MaxWidthContainer>
		<FaqSection {faqs} />
	</MaxWidthContainer>
</main>
