<script lang="ts">
    import { onMount } from 'svelte';
	import MeetingMinuteItem from './MeetingMinuteItem.svelte';
    
    export let minutes: { date: string; fileLink: string; }[];
  
    let filteredMinutes = [...minutes];
    let searchYear = "";
    let currentPage = 1;
    const itemsPerPage = 12;
  
    function filterMinutes() {
      if (searchYear) {
        filteredMinutes = minutes.filter(m => m.date.includes(searchYear));
      } else {
        filteredMinutes = [...minutes];
      }
      currentPage = 1; // Reset to first page when filtering
    }
  
    function nextPage() {
      if (currentPage * itemsPerPage < filteredMinutes.length) {
        currentPage++;
      }
    }
  
    function prevPage() {
      if (currentPage > 1) {
        currentPage--;
      }
    }
     // ✅ Reactive paginated list
    $: paginatedMinutes = filteredMinutes.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  </script>
  
  <section class="py-8">
    <h2 class="text-3xl font-bold mb-4">Meeting Minutes</h2>
  
    <!-- Search / Filter -->
    <div class="flex flex-col md:flex-row gap-4" style="margin-bottom: 1rem;">
      <input
        type="text"
        class="input input-bordered w-full md:w-64"
        placeholder="Filter by Year (e.g. 2023)"
        bind:value={searchYear}
        on:input={filterMinutes}
      />
    </div>
  
    <!-- Meeting Minutes List -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each paginatedMinutes as minute (minute.date)}
      <MeetingMinuteItem date={minute.date} fileLink={minute.fileLink} />
    {/each}
    
    </div>
  

    <div class="mt-6 join">
        <button class="join-item btn" on:click={prevPage} disabled={currentPage === 1}>«</button>
        <button class="join-item btn">Page {currentPage}</button>
        <button class="join-item btn" on:click={nextPage} disabled={currentPage * itemsPerPage >= filteredMinutes.length}>»</button>
      </div>
  </section>
  