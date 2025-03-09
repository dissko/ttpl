<script lang="ts">
    export let name: string;
    export let role: string;
  </script>
  
  <div class="card bg-base-100 shadow-md p-4">
    <div class="card-body text-center">
      <h2 class="card-title">{name}</h2>
      <p class="text-gray-600">{role}</p>
    </div>
  </div>
  