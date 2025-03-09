<script lang="ts">
	import MaxWidthContainer from "$lib/components/MaxWidthContainer.svelte";
	import HomeHero from "$lib/components/home/HomeHero.svelte";
	import FeaturedCard from "$lib/components/FeaturedCard.svelte";
	import FeatureSection from "$lib/components/home/FeatureSection.svelte";
  
	// Data for the featured cards grid
	const featuredCards = [
	  {
		image: '/images/melrose_craft_sale.png',
		title: '35th Melrose Craft Sale',
		description: 'Join us for the 35th Melrose Craft Sale on November 1st and 2nd! Visit our Facebook page for more information.',
		buttonText: 'Visit our Facebook Page',
		buttonLink: 'https://www.facebook.com/YOUR_LIBRARY_PAGE'
	  },
	  {
		image: '/images/after_school_tutoring.png',
		title: 'After School Tutoring',
		description: 'Our After School Tutoring program is now open for registration.',
		buttonText: 'Call to Register',
		buttonLink: 'tel:1234567890'
	  },
	  {
		image: '/images/melrose_craft_sale.png',
		title: 'Fun Time Circle',
		description: 'Join us for our Fun Time Circle program where preschool children learn through interactive art and play.',
		buttonText: 'Visit our Facebook Page',
		buttonLink: 'https://www.facebook.com/YOUR_LIBRARY_PAGE'
	  }
	];
  </script>
  
  <!-- Top Hero Section -->
  <HomeHero 
	image="/images/hero.jpg"
	title="Welcome to the Tyendinaga Township Public Library"
	description="Your hub for books, events, and community resources. Follow us on Facebook for the latest updates!"
	ctaText="Visit Our Facebook Page"
	ctaLink="https://www.facebook.com/YOUR_LIBRARY_PAGE" />
  
  <!-- Featured Events and Activities -->
  <section id="activities" class="bg-base-200 px-4 py-8">
	<MaxWidthContainer>
	  <h1 class="mb-4 text-lg font-semibold">Featured Events and Activities</h1>
	  <div class="grid grid-cols-1 justify-items-center gap-4 px-2 md:grid-cols-2 lg:grid-cols-3">
		{#each featuredCards as card}
		  <FeaturedCard 
			image={card.image}
			title={card.title}
			description={card.description}
			buttonText={card.buttonText}
			buttonLink={card.buttonLink} />
		{/each}
	  </div>
	</MaxWidthContainer>
  </section>
  
  <!-- Become a Friend of the Library Section -->
  <FeatureSection
	title="Become a Friend of the Library"
	description="Support your public library by becoming a Friend of the Library. See the flyer for more details."
	image="/images/friends_of_the_library.png"
	direction="bottom" />
  
  <!-- LEAF Initiative Section -->
  <FeatureSection
	title="We're a LEAF Initiative Recipient!"
	description="We are thrilled to announce that we have received the Commonwell L.E.A.F. Grant which will be used towards revitalizing accessibility at Tyendinaga Township Public Library. Check out our press release for more information!"
	image="/images/Revitalizing Accessibility.png"
	direction="left"
	bgColor="bg-base-200"
	ctaText="Get Started"
	ctaLink="/press-release" />
  