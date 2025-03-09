<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

    	// Import the components
	import Header from '$lib/components/nav/Header.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';

	let selectedTheme = "light";

	function changeTheme(theme: string) {
		selectedTheme = theme;
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}

	onMount(() => {
		const storedTheme = localStorage.getItem("theme") || "light";
		selectedTheme = storedTheme;
		document.documentElement.setAttribute("data-theme", storedTheme);
	});
</script>



<!-- Include Navbar and Footer -->
<Header {changeTheme} />
<div class="px-2">
  <slot />
</div>
<Footer />