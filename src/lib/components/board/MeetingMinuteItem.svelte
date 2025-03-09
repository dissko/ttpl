<!-- src/lib/components/MeetingMinuteItem.svelte -->
<script lang="ts">
    export let date: string;
    export let fileLink: string;
    export let title: string;
  </script>
  
  <div class="card bg-base-100 shadow-md">
    <div class="card-body">
      <h3 class="card-title">{title}</h3>
      <p class="text-sm text-gray-600">{date}</p>
      <div class="card-actions justify-end">
        <a href={fileLink} target="_blank" class="btn btn-primary btn-sm">Download</a>
      </div>
    </div>
  </div>
  