<!-- src/lib/components/LibraryPolicies.svelte -->
<script lang="ts">
    export let policies: { title: string; link: string }[];
  </script>
  
  <section class="py-8">
    <h2 class="text-3xl font-bold mb-4">Library Policies</h2>
    <ul class="menu bg-base-100 rounded-box p-4 shadow">
      {#each policies as policy}
        <li>
          <a href={policy.link} target="_blank" class="hover:underline">
            {policy.title}
          </a>
        </li>
      {/each}
    </ul>
  </section>
  