<script lang="ts">
    import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
import PageHeader from '$lib/components/PageHeader.svelte';
  
    // Define the interface for a service
    interface Service {
      icon: string;
      title: string;
      description: string;
      link: string;
    }
  
    // Array of services – eventually this data will come from Decap
    const services: Service[] = [
      {
        icon: "fa-solid fa-print",
        title: "Printing Services",
        description: "We provide printing, photocopying, faxing, and scanning services. Fees apply per page.",
        link: "/contact"
      },
      {
        icon: "fa-solid fa-desktop",
        title: "Public Computers",
        description: "Access desktop computers and high-speed internet for public use during library hours.",
        link: "/contact"
      },
      {
        icon: "fa-solid fa-id-card",
        title: "Library Cards",
        description: "Apply for a library card to borrow materials and use our digital services.",
        link: "/contact"
      },
      {
        icon: "fa-solid fa-calendar",
        title: "Event Calendar",
        description: "Stay updated with our upcoming events and programs on our online calendar.",
        link: "/calendar"
      },
      {
        icon: "fa-solid fa-book-open",
        title: "Electronic Resources",
        description: "Explore eBooks, audiobooks, and online journals available 24/7 with your library card.",
        link: "/resources"
      },
      {
        icon: "fa-solid fa-download",
        title: "Online Reference Materials",
        description: "Access dictionaries, atlases, encyclopedias, and other reference tools online.",
        link: "/resources"
      },
      {
        icon: "fa-solid fa-users",
        title: "Library Board",
        description: "Learn more about our dedicated library board members and their roles.",
        link: "/board"
      },
      {
        icon: "fa-solid fa-comments",
        title: "Meeting Room",
        description: "Our meeting room is available for rent—contact us to book a time.",
        link: "/contact"
      }
    ];
  </script>
  
  <!-- Page Header -->
  <PageHeader 
    title="Library Services" 
    subtitle="Discover the wide range of services we offer at the library." 
    bgClass="bg-primary" />
  
  <main class="bg-base-100 min-h-screen py-8">
    <MaxWidthContainer>
      <!-- Responsive grid layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each services as service}
          <div class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow w-full max-w-sm" style="margin: 1rem 0;">
            <div class="card-body text-center">
              <i class="{service.icon} text-4xl text-primary mb-4"></i>
              <h2 class="card-title text-xl font-semibold mb-2">{service.title}</h2>
              <p class="mb-4 text-sm">{service.description}</p>
              <a href={service.link} class="btn btn-primary btn-sm">GET MORE INFO</a>
            </div>
          </div>
        {/each}
      </div>
    </MaxWidthContainer>
  </main>