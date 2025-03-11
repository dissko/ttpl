<script lang="ts">
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc';
  import timezone from 'dayjs/plugin/timezone';
  dayjs.extend(utc);
  dayjs.extend(timezone);

  export let title: string;
  export let image: string = '';
  export let description: string = '';
  export let buttonText: string = '';
  export let buttonLink: string = '';
  export let date: string | undefined;

  let displayDate: string = '';
  if (date) {
    // Parse the date string as if it's in America/New_York time.
    const d = dayjs.tz(date, 'America/New_York');
    if (d.hour() === 0 && d.minute() === 0) {
      displayDate = d.format('MMMM D, YYYY');
    } else {
      displayDate = d.format('MMMM D, YYYY h:mm A');
    }
  } else {
    displayDate = '';
  }
</script>

<div class="card bg-base-100 w-full max-w-sm shadow-sm">
  {#if image}
    <figure>
      <img src={image} alt={title} />
    </figure>
  {/if}
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    {#if date}
      <p class="text-xs text-gray-600">{displayDate}</p>
    {/if}
    {#if description}
      <p>{description}</p>
    {/if}
    {#if buttonText && buttonLink}
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() => window.open(buttonLink, '_blank')}>
          {buttonText}
        </button>
      </div>
    {/if}
  </div>
</div>
