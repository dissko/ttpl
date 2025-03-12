<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	// Import the components
	import Header from '$lib/components/nav/Header.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';
	import Alert from '$lib/components/nav/Alert.svelte';

	let selectedTheme = 'light';

	// function changeTheme(theme: string) {
	// 	selectedTheme = theme;
	// 	document.documentElement.setAttribute('data-theme', theme);
	// 	localStorage.setItem('theme', theme);
	// }

	// onMount(() => {
	// 	const storedTheme = localStorage.getItem('theme') || 'light';
	// 	selectedTheme = storedTheme;
	// 	document.documentElement.setAttribute('data-theme', storedTheme);
	// });
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
