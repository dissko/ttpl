<script>
	import ThemeDropdown from "$lib/components/nav/ThemeDropdown.svelte";
	import AboutDropdown from "$lib/components/nav/AboutDropdown.svelte";
	export let changeTheme;
	</script>

<!-- Mobile Navbar -->
<nav class="navbar bg-base-300 justify-between md:justify-center">
	<a class="btn btn-ghost text-lg" href="/" style="height:fit-content">
		<img alt="Logo" src="/images/logo.png" class="w-4" style="height: 100px; width:auto;" />
	</a>

	<div class="dropdown dropdown-end md:hidden">
		<button class="btn btn-ghost" aria-label="Menu">
			<i class="fa-solid fa-bars text-xl"></i>
		</button>

		<ul class="dropdown-content menu bg-base-200 rounded-box z-[1] w-64 gap-2 p-4 shadow">
			<li><a href="/">Home</a></li>
			<li>
				<AboutDropdown />
			</li>
			<a href="/activities">Activities</a>
			<a href="/">Events</a>
			<a href="/">Resources</a>
			<a href="/">Contact</a>
		</ul>
	</div>

	<!-- Theme Switcher (Dev Only) -->
	<ThemeDropdown {changeTheme} />
</nav>

<!-- Desktop Navbar -->
<nav class="bg-base-200 hidden justify-center md:flex py-2">
	<div class="hidden gap-2 md:flex">
		<AboutDropdown />
		<a class="btn btn-ghost btn-sm" href="/activities">Activities</a>
		<a class="btn btn-ghost btn-sm" href="/">Events</a>
		<a class="btn btn-ghost btn-sm" href="/">Resources</a>
		<a class="btn btn-ghost btn-sm" href="/">Contact</a>
	</div>
</nav>
