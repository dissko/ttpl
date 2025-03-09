<!-- src/lib/components/ResourceList.svelte -->
<script lang="ts">
	import MaxWidthContainer from '../MaxWidthContainer.svelte';
	import ResourceItem from './ResourceItem.svelte';
	export let resources: {
		title: string;
		image?: string;
		description?: string;
		link?: string;
	}[];
</script>

<section class="space-y-4">
	<MaxWidthContainer>
		{#if resources.length > 0}
			{#each resources as resource}
				<ResourceItem
					title={resource.title}
					image={resource.image}
					description={resource.description}
					link={resource.link}
				/>
			{/each}
		{:else}
			<p class="py-8 text-center text-lg text-gray-600">
				No resources available at the moment. Please check back later!
			</p>
		{/if}
	</MaxWidthContainer>
</section>
