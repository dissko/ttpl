<script lang="ts">
	import MaxWidthContainer from '../MaxWidthContainer.svelte';
	import { marked } from 'marked';

	export let bannerAlert: {
		text: string; // Markdown content
		color: string;
		startDate: string | undefined; // YYYY-MM-DD
		endDate: string | undefined; // YYYY-MM-DD
	};

	// Check if start date is not defined or is in the past
	const isStartDateValid = !bannerAlert.startDate || new Date(bannerAlert.startDate) <= new Date();
	// Check if end date is not defined or is in the future
	const isEndDateValid = !bannerAlert.endDate || new Date(bannerAlert.endDate) >= new Date();
	// Check if the alert is active
	const isAlertActive = isStartDateValid && isEndDateValid;

	// Parse the Markdown text into HTML
	$: parsedText = marked(bannerAlert.text);
</script>

{#if isAlertActive}
	<div role="alert" class="alert alert-{bannerAlert.color} alert-soft flex justify-center">
		<MaxWidthContainer classList="w-full px-4 sm:px-6 lg:px-8 text-center">
			<span>{@html parsedText}</span>
		</MaxWidthContainer>
	</div>
{/if}
