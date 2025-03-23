<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import FeaturedCard from '$lib/components/FeaturedCard.svelte';
	  import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
    import type { Event } from '$lib';
    import SvelteSeo from 'svelte-seo';
    // Define an interface for event data

    export let data: {
        events: Event[];
    }
    const { events } = data;
  
  </script>
  
  <SvelteSeo
    title="Library Events - Tyendinaga Township Public Library"
    description="Check out our upcoming events and special programs."
    canonical="https://ttpl.ca/events"
    keywords="tyendinaga, shannonville, belleville, ontario, library, books, events, community, resources" />
  <!-- Reusable Page Header -->
  <PageHeader 
    title="Library Events" 
    subtitle="Check out our upcoming events and special programs."  />
  
  <main class="bg-base-100 py-8">
    <MaxWidthContainer>
      {#if events.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {#each events as event}
            <FeaturedCard 
              title={event.title}
              description={event.description}
              image={event.image}
              buttonText={event.buttonText}
              buttonLink={event.link}
              date={event.date} />
          {/each}
        </div>
      {:else}
        <div class="text-center py-12">
          <p class="text-xl text-gray-600">
            No upcoming events at the moment. Please check back soon!
          </p>
        </div>
      {/if}
    </MaxWidthContainer>
  </main>