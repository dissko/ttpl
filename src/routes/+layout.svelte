<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let selectedTheme = "light";

	function changeTheme(theme: string) {
		selectedTheme = theme;
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}

	onMount(() => {
		const storedTheme = localStorage.getItem("theme") || "light";
		selectedTheme = storedTheme;
		document.documentElement.setAttribute("data-theme", storedTheme);
	});
</script>



<nav class="navbar bg-base-300 justify-between md:justify-center">
	<a class="btn btn-ghost text-lg" href="/" style="height:fit-content">
		<img alt="Logo" src="/images/logo.png" class="w-4" style="height: 100px; width:auto;" />
	</a>

    <!-- Only on mobile -->
	<div class="dropdown dropdown-end md:hidden">
		<button class="btn btn-ghost" aria-label="Menu">
			<i class="fa-solid fa-bars text-xl"></i>
		</button>

		<ul class="dropdown-content menu bg-base-200 rounded-box z-[1] w-64 gap-2 p-4 shadow">
            <li><a href="/">Home</a></li>
			<li>
				<h2 class="menu-title">About</h2>
				<ul>
					<li><a href="/">Library Board</a></li>
					<li><a href="/">FAQ</a></li>
					<li><a href="/">Services</a></li>
				</ul>
			</li>
			<a href="/">Activities</a>
			<a href="/">Events</a>
			<a href="/">Resources</a>
			<a href="/">Contact</a>
		</ul>
	</div>

	<!-- Theme Switcher (Dev Only) -->
    <details class="dropdown">
		<summary class="btn btn-ghost">🌗 Theme</summary>
		<ul id="theme-switcher" class="dropdown-content menu bg-base-200 rounded-box z-[1] w-40 p-2 shadow">
			<li><button onclick={() => changeTheme('light')}>Light</button></li>
			<li><button onclick={() => changeTheme('dark')}>Dark</button></li>
			<li><button onclick={() => changeTheme('cupcake')}>Cupcake</button></li>
			<li><button onclick={() => changeTheme('bumblebee')}>Bumblebee</button></li>
			<li><button onclick={() => changeTheme('emerald')}>Emerald</button></li>
			<li><button onclick={() => changeTheme('corporate')}>Corporate</button></li>
			<li><button onclick={() => changeTheme('synthwave')}>Synthwave</button></li>
			<li><button onclick={() => changeTheme('retro')}>Retro</button></li>
			<li><button onclick={() => changeTheme('cyberpunk')}>Cyberpunk</button></li>
			<li><button onclick={() => changeTheme('valentine')}>Valentine</button></li>
			<li><button onclick={() => changeTheme('halloween')}>Halloween</button></li>
			<li><button onclick={() => changeTheme('garden')}>Garden</button></li>
			<li><button onclick={() => changeTheme('forest')}>Forest</button></li>
			<li><button onclick={() => changeTheme('aqua')}>Aqua</button></li>
			<li><button onclick={() => changeTheme('lofi')}>Lo-Fi</button></li>
			<li><button onclick={() => changeTheme('pastel')}>Pastel</button></li>
			<li><button onclick={() => changeTheme('fantasy')}>Fantasy</button></li>
			<li><button onclick={() => changeTheme('wireframe')}>Wireframe</button></li>
			<li><button onclick={() => changeTheme('black')}>Black</button></li>
			<li><button onclick={() => changeTheme('luxury')}>Luxury</button></li>
			<li><button onclick={() => changeTheme('dracula')}>Dracula</button></li>
			<li><button onclick={() => changeTheme('cmyk')}>CMYK</button></li>
			<li><button onclick={() => changeTheme('autumn')}>Autumn</button></li>
			<li><button onclick={() => changeTheme('business')}>Business</button></li>
			<li><button onclick={() => changeTheme('acid')}>Acid</button></li>
			<li><button onclick={() => changeTheme('lemonade')}>Lemonade</button></li>
			<li><button onclick={() => changeTheme('night')}>Night</button></li>
			<li><button onclick={() => changeTheme('coffee')}>Coffee</button></li>
			<li><button onclick={() => changeTheme('winter')}>Winter</button></li>
		</ul>
	</details>
</nav>


<!-- Navbar -->
<nav class="bg-base-200 hidden justify-center md:flex py-2">

	<!-- Menu for desktop -->
	<div class="hidden gap-2 md:flex">
		<div class="dropdown dropdown-end">
			<button class="btn btn-ghost btn-sm">
				About
				<i class="fa-solid fa-chevron-down"></i>
			</button>

			<ul class="dropdown-content menu bg-base-200 rounded-box z-[1] w-56 gap-2 p-6 shadow">
				<li><a href="/">Library Board</a></li>
				<li><a href="/">FAQ</a></li>
				<li><a href="/">Services</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost btn-sm" href="/"> Activities </a>
		<a class="btn btn-ghost btn-sm" href="/"> Events </a>
		<a class="btn btn-ghost btn-sm" href="/"> Resources </a>
		<a class="btn btn-ghost btn-sm" href="/"> Contact </a>
	</div>
</nav>
<slot />
<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content px-10 pt-10 pb-4">
    <!-- Library Info -->
    <div class="hidden sm:flex  h-full flex-col">
      <h2 class="text-2xl font-bold">Tyendinaga Township Public Library</h2>
      <p class="hidden md:block">
        Inspiring minds and fostering community engagement through knowledge and creativity.
      </p>
      <p class="mt-auto text-xs">
        Copywright 2024, Tyendinaga Township Public Library. Website by <a href="https://nicksalt.me" target="_blank">Nick Salt</a>.
      </p>
    </div>
  
    <!-- Hours -->
    <div>
      <span class="footer-title">Hours</span>
      <p>Tue - Thur: 10am - 8pm</p>
      <p>Sat: 10am - 4pm</p>
      <p>Sun: Closed</p>
      <p><i>Closed Saturdays of long weeknds</i></p>
    </div>
  
    <!-- Contact Info -->
    <div>
      <span class="footer-title">Contact</span>
      <p>123 Library Lane</p>
      <p>Tyendinaga, ON</p>
      <p>Email: <a href="mailto:tyendinagatwplibrary@gmail.com">tyendinagatwplibrary@gmail.com</a></p>
      <p>Phone: <a href="tel:6139670606">(613) 967-0606</a></p>
    </div>
  
    <!-- Sitemap -->
    <div>
      <span class="footer-title">Sitemap</span>
      <ul>
        <li><p>About</p>
          <ul class="ml-4 text-sm">
            <li><a href="/about/board">Library Board</a></li>
            <li><a href="/about/faq">FAQ</a></li>
            <li><a href="/about/services">Services</a></li>
            <li><a href="/about/calendar">Calendar</a></li>
          </ul>
        </li>
        <li><a href="/activities">Activities</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </footer>
  