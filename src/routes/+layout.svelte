<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	// Import the components
	import Header from '$lib/components/nav/Header.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';
	import Alert from '$lib/components/nav/Alert.svelte';

	import posthog from 'posthog-js'
	import { browser } from '$app/environment';

	onMount(() => {
	console.log('onMount')
	if (browser) {
		console.log('Posthog initialized')
		posthog.init(
		'phc_SeMF7KaxKen08S8dnq7zS0S18tWKGCLVHU0dmcCKl1M',
		{ 
			api_host: 'https://us.i.posthog.com',
			person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
		}
		)
	}
	return
	});
	export let data: {
		contact: {
			streetAddress: string;
			cityProvince: string;
			postalCode: string;
			email: string;
			phone: string;
			facebook: string;
			instagram: string;
			tiktok: string;
			pinterest: string;
		};
		bannerAlert: {
			text: string;
			color: string;
			startDate: string | undefined;
			endDate: string | undefined;
		}
	};
</script>

<!-- Include Navbar and Footer -->
<div class="flex min-h-screen flex-col">
	<Alert bannerAlert={data.bannerAlert} />
	<Header />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer contact={data.contact} />
</div>
