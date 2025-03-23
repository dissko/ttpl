<!-- src/routes/resources/+page.svelte -->
<script lang="ts">
	import PageHeader from "$lib/components/PageHeader.svelte";
  import ResourceList from "$lib/components/resources/ResourceList.svelte";
  import type { Resource } from "$lib";
  import SvelteSeo from "svelte-seo";
  export let data: { resources: Resource[] };
  const { resources } = data;
   

  </script>
  
  <SvelteSeo
    title="Resources and Reference Links - Tyendinaga Township Public Library"
    description="Access our comprehensive electronic resources and reference tools."
    canonical="https://ttpl.ca/resources"
    keywords="tyendinaga, shannonville, belleville, ontario, library, books, events, community, resources"/>
  <!-- Page Header -->
  <PageHeader 
    title="Resources and Reference Links" 
    subtitle="Access our comprehensive electronic resources and reference tools." />
  
  <main class="bg-base-100 py-8">
    <div class="container mx-auto px-4">
      <ResourceList {resources} />
    </div>
  </main>
  
  