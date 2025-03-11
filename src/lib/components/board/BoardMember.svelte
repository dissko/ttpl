<script lang="ts">
  export let name: string;
  export let role: string;
</script>

<div class="flex items-center p-2 border rounded-md">
  <div class="flex-1">
    <h2 class="text-lg font-medium">{name}</h2>
    <p class="text-sm text-gray-500">{role}</p>
  </div>
</div>
