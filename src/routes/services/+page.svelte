<script lang="ts">
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

  export let data: {
    services: {
      title: string;
      description: string;
      icon: string;
      link: string;
      buttonText: string;
    }[];
  }

  const { services } = data;
</script>

<!-- Page Header -->
<PageHeader
	title="Library Services"
	subtitle="Discover the wide range of services we offer at the library."
/>

<main class="bg-base-100 py-8">
	<MaxWidthContainer>
		<!-- Responsive grid layout -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as service}
				<div
					class="card bg-base-100 w-full max-w-sm shadow-md transition-shadow hover:shadow-xl mx-auto" >
					<div class="card-body text-center">
						<i class="{service.icon} text-primary mb-4 text-4xl"></i>
						<h2 class="card-title mb-2 text-xl font-semibold">{service.title}</h2>
						<p class="mb-4 text-sm">{service.description}</p>
            <!-- If buttonText and link are not null, display button -->
            {#if service.buttonText && service.link}
              <a href={service.link} class="btn btn-primary btn-sm">{service.buttonText}</a>
            {/if}
					</div>
				</div>
			{/each}
		</div>
	</MaxWidthContainer>
</main>
