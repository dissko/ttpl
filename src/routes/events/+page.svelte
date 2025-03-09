<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import FeaturedCard from '$lib/components/FeaturedCard.svelte';
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
  
    // Define an interface for event data
    interface Event {
      title: string;
      description?: string;
      image?: string;
      buttonText?: string;
      buttonLink?: string;
    }
  
    // Sample array of events – later, this data will come from your CMS.
    const events: Event[] = [
      {
        title: "35th Melrose Craft Sale",
        description:
          "Join us for the 35th Melrose Craft Sale on November 1st and 2nd! Visit our Facebook page for more information.",
        image: "/images/melrose_craft_sale.png",
        buttonText: "Visit our Facebook Page",
        buttonLink: "https://www.facebook.com/YOUR_LIBRARY_PAGE"
      }
    ];
  </script>
  
  <!-- Reusable Page Header -->
  <PageHeader 
    title="Library Events" 
    subtitle="Check out our upcoming events and special programs." 
    bgClass="bg-primary" />
  
  <main class="bg-base-100 min-h-screen py-8">
    <MaxWidthContainer>
      {#if events.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each events as event}
            <FeaturedCard 
              title={event.title}
              description={event.description}
              image={event.image}
              buttonText={event.buttonText}
              buttonLink={event.buttonLink} />
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