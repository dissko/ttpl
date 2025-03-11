  
  <script>
    import PageHeader from "$lib/components/PageHeader.svelte";
  </script>
  <main class="bg-base-100">
    <!-- Hero Section -->
     <PageHeader title="Calendar" subtitle="Stay up to date with our events and programs." bgClass="bg-primary" />
  
    <!-- Calendar Embed -->
    <section class="py-10 px-4">
      <div class="container mx-auto">
        <div class="rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="Library Calendar"
            src="https://www.google.com/calendar/embed?src=tyendinagatwplibrary%40gmail.com&ctz=America/Toronto"
            style="border:0"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no">
          </iframe>
        </div>
      </div>
    </section>
  </main>
  