<script lang="ts">
	import MaxWidthContainer from '../MaxWidthContainer.svelte';
	export let bannerAlert: {
			text: string;
			color: string;
			startDate: string | undefined; // YYYY-MM-DD
			endDate: string | undefined; // YYYY-MM-DD
		};
		// check if start date is not defined or is in the past
		const isStartDateValid = !bannerAlert.startDate || new Date(bannerAlert.startDate) <= new Date();
		// check if end date is not defined or is in the future
		const isEndDateValid = !bannerAlert.endDate || new Date(bannerAlert.endDate) >= new Date();
		// check if the alert is active
		const isAlertActive = isStartDateValid && isEndDateValid;
</script>
{#if isAlertActive}
	<div role="alert" class="alert alert-{bannerAlert.color} alert-soft flex justify-center">
		<MaxWidthContainer classList="w-full px-4 sm:px-6 lg:px-8 text-center">
			<span>
				{bannerAlert.text}
			</span>
		</MaxWidthContainer>
	</div>
{/if}
