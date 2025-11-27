<script lang="ts">
  	import TrafficCounter from '$lib/TrafficCounter.svelte';
    export let contact: {
      streetAddress: string;
      cityProvince: string;
      postalCode: string;
      email: string;
      phone: string;
      facebook: string;
      instagram: string;
      tiktok: string;
      pinterest: string;
    };
</script>

<footer class="footer md:footer-horizontal bg-neutral text-neutral-content px-10 pt-10 pb-4">
  <!-- Library Info -->
  <div class="hidden md:flex h-full flex-col">
    <h2 class="text-2xl font-bold">Tyendinaga Township Public Library</h2>
    <p class="hidden md:block">
      Inspiring minds and fostering community engagement through knowledge and creativity.
    </p>
    <p class="mt-auto text-xs">
    
    </p>
    <p class="mt-auto text-xs">
      Copyright 2024, Tyendinaga Township Public Library. Website by
      <a href="https://nicksalt.me" target="_blank">Nick Salt</a>.
    </p>
  </div>

  <!-- Hours -->
  <div>
    <span class="footer-title">Hours</span>
    <p>Tue - Thur: 10am - 8pm</p>
    <p>Sat: 10am - 4pm</p>
    <p>Sun: Closed</p>
    <p><i>Closed Saturdays of long weekends</i></p>
    <br/>
    <p>
      For up-to-date hours, please check our
      <a href="https://www.facebook.com/tyendinagatownshippubliclibrary/" target="_blank" class="hover:underline">
        Facebook page
      </a>.
  </div>

  <!-- Contact Info -->
  <div>
    <span class="footer-title">Contact</span>
    <p>{contact.streetAddress}</p>
    <p>{contact.cityProvince}</p>
    <p>
      Email:
      <a href={`mailto:${contact.email}`} class="hover:underline">
        {contact.email}
      </a>
    </p>
    <p>
      Phone:
      <a href={`tel:${contact.phone}`} class="hover:underline">
        {contact.phone}
      </a>
    </p>
    <!-- Social Links -->
    <p class="flex gap-4 mt-2">
      {#if contact.facebook}
        <a href={contact.facebook} target="_blank" rel="noopener" class="hover:underline">Facebook</a>
      {/if}
      {#if contact.instagram}
        <a href={contact.instagram} target="_blank" rel="noopener" class="hover:underline">Instagram</a>
      {/if}
      {#if contact.tiktok}
        <a href={contact.tiktok} target="_blank" rel="noopener" class="hover:underline">TikTok</a>
      {/if}
      {#if contact.pinterest}
        <a href={contact.pinterest} target="_blank" rel="noopener" class="hover:underline">Pinterest</a>
      {/if}
    </p>
  </div>

  <!-- Sitemap -->
  <div>
    <span class="footer-title">Sitemap</span>
    <ul>
      <li>
        <p>About</p>
        <ul class="ml-4 text-sm">
          <li><a href="/board">Library Board</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/calendar">Calendar</a></li>
        </ul>
      </li>
      <li><a href="/activities">Activities</a></li>
      <li><a href="/events">Events</a></li>
      <li><a href="/resources">Resources</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</footer>
