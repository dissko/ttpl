<script lang="ts">
    import { onMount } from 'svelte';
    
    export let minutes: { date: string; fileLink: string; title: string }[];
  
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
  
    function paginateMinutes() {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredMinutes.slice(start, end);
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
      {#each paginateMinutes() as minute}
        <div class="card bg-base-100 shadow-md p-4">
          <h3 class="card-title">{minute.title}</h3>
          <p class="text-sm text-gray-600">{minute.date}</p>
          <div class="card-actions justify-end">
            <a href={minute.fileLink} target="_blank" class="btn btn-primary btn-sm">Download</a>
          </div>
        </div>
      {/each}
    </div>
  

    <div class="mt-6 join">
        <button class="join-item btn" on:click={prevPage} disabled={currentPage === 1}>«</button>
        <button class="join-item btn">Page {currentPage}</button>
        <button class="join-item btn" on:click={nextPage} disabled={currentPage * itemsPerPage >= filteredMinutes.length}>»</button>
      </div>
  </section>
  