<!-- src/lib/components/FeatureSection.svelte -->
<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let ctaText: string = '';
	export let ctaLink: string = '';
	export let bgColor: string = 'bg-base-100';
	// direction can be "top", "bottom", "left", or "right"
	export let direction: 'top' | 'bottom' | 'left' | 'right' = 'left';
	// when component is created, log all props to the console

	// create a function to set the target for anchor tags
	// if it is a releative link, set the target to _self
	// if it is an external link, set the target to _blank
	const setTarget = () => {
		if (ctaLink.startsWith('http')) {
			return '_blank';
		}
		return '_self';
	};
</script>

<section class="hero py-4 {bgColor}">
	<div class="hero-content w-full">
		{#if direction === 'top'}
			<div class="flex flex-col items-center">
				<img src={image} alt={title} class="mb-4 w-full max-w-sm rounded-lg" />
				<div class="max-w-md text-center">
					<h1 class="text-3xl font-semibold">{title}</h1>
					<p class="py-4">{description}</p>
					{#if ctaText && ctaLink}
						<a href={ctaLink} target="{setTarget()}" class="btn btn-primary">{ctaText}</a>
					{/if}
				</div>
			</div>
		{:else if direction === 'bottom'}
			<div class="flex flex-col items-center">
				<div class="max-w-md text-center">
					<h1 class="text-3xl font-semibold">{title}</h1>
					<p class="py-4">{description}</p>
					{#if ctaText && ctaLink}
						<a href={ctaLink} target="{setTarget()}" class="btn btn-primary">{ctaText}</a>
					{/if}
				</div>
				<img src={image} alt={title} class="mt-4 w-full max-w-sm rounded-lg" />
			</div>
		{:else if direction === 'left'}
			<div class="flex flex-col items-center lg:flex-row gap-8">
				<img src={image} alt={title} class="w-full max-w-sm rounded-lg" />
				<div class="max-w-md">
					<h1 class="text-3xl font-semibold">{title}</h1>
					<p class="py-4">{description}</p>
					{#if ctaText && ctaLink}
						<a href={ctaLink} target="{setTarget()}" class="btn btn-primary">{ctaText}</a>
					{/if}
				</div>
			</div>
		{:else if direction === 'right'}
			<div class="flex flex-col items-center lg:flex-row gap-8">
				<div class="max-w-md">
					<h1 class="text-3xl font-semibold">{title}</h1>
					<p class="py-4">{description}</p>
					{#if ctaText && ctaLink}
						<a href={ctaLink} target="{setTarget()}" class="btn btn-primary">{ctaText}</a>
					{/if}
				</div>
				<img src={image} alt={title} class="w-full max-w-sm rounded-lg" />
			</div>
		{/if}
	</div>
</section>
