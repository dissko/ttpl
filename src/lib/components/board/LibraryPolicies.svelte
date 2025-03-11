<!-- src/lib/components/LibraryPolicies.svelte -->
<script lang="ts">
    export let policies: { name: string; pdf: string }[];
  </script>
  
  <section class="py-4">
    <h2 class="text-3xl font-bold mb-4">Library Policies</h2>
    <ul class="menu bg-base-100 rounded-box p-4 shadow">
      {#each policies as policy}
        <li>
          <a href={policy.pdf} target="_blank" class="hover:underline">
            {policy.name}
          </a>
        </li>
      {/each}
    </ul>
  </section>
  