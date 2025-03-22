<script>
	import ThemeDropdown from "$lib/components/nav/ThemeDropdown.svelte";
	import AboutDropdown from "$lib/components/nav/AboutDropdown.svelte";
	// export let changeTheme;
	</script>

<!-- Mobile Navbar -->
<nav class="navbar bg-base-300 justify-between md:justify-center">
	<a class="btn btn-ghost text-lg" href="/" style="height:fit-content">
		<img alt="Logo" src="/logo.png" class="w-4" style="height: 100px; width:auto;" />
	</a>

	<div class="dropdown dropdown-end md:hidden">
		<button tabIndex="0" class="btn btn-ghost" aria-label="Menu">
			<i class="fa-solid fa-bars text-xl"></i>
		</button>

<ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-[1] w-64 gap-2 p-4 shadow">
  <li><a href="/">Home</a></li>
  <li>
    <!-- Ensure AboutDropdown returns a clickable element -->
    <AboutDropdown />
  </li>
  <li><a href="/activities">Activities</a></li>
  <li><a href="/events">Events</a></li>
  <li><a href="/resources">Resources</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
	</div>

</nav>

<!-- Desktop Navbar -->
<nav class="bg-base-200 hidden justify-center md:flex py-2">
	<div class="hidden gap-2 md:flex">
		<a class="btn btn-ghost btn-sm" href="/">Home</a>
		<AboutDropdown />
		<a class="btn btn-ghost btn-sm" href="/activities">Activities</a>
		<a class="btn btn-ghost btn-sm" href="/events">Events</a>
		<a class="btn btn-ghost btn-sm" href="/resources">Resources</a>
		<a class="btn btn-ghost btn-sm" href="/contact">Contact</a>
		
	<!-- Theme Switcher (Dev Only) -->
	<!-- <ThemeDropdown {changeTheme} /> -->
	</div>
</nav>
