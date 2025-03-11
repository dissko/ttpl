<!-- src/lib/components/BoardMembers.svelte -->
<script lang="ts">
    import BoardMember from './BoardMember.svelte';
    export let members: { name: string; role: string; order: number }[];
  </script>
  
  <section class="py-8">
    <h2 class="text-3xl font-bold mb-4">Board Members</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each members as member}
        <BoardMember name={member.name} role={member.role} />
      {/each}
    </div>
  </section>
  