<script>
	import '../app.css'
</script>
<!-- Navbar -->
<nav class="navbar justify-between bg-base-300">
    <!-- Logo -->
    <a class="btn btn-ghost text-lg" href="/">
        Tyendinaga Township Public Library
    </a>

    <!-- Menu for mobile -->
    <div class="dropdown dropdown-end md:hidden">
        <button class="btn btn-ghost" aria-label="Menu">
            <i class="fa-solid fa-bars text-lg"></i>
        </button>

        <ul class="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-64 gap-2">

           <li>
                <h2 class="menu-title">About</h2>
                <ul>
                    <li><a href="/">Library Board</a></li>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Services</a></li>
                </ul>
            </li>
            
            <a href="/">
                Activities
            </a>
			<a href="/" >
				Events
			</a>
			<a href="/" >
				Resources
			</a>
			<a href="/">
				Contact
			</a>
		
        </ul>
    </div>

    <!-- Menu for desktop -->
    <div class="hidden md:flex gap-2">
        <div class="dropdown dropdown-end">
            <button class="btn btn-ghost btn-sm">
                About
                <i class="fa-solid fa-chevron-down"></i>
            </button>

            <ul class="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
				<li><a href="/">Library Board</a></li>
				<li><a href="/">FAQ</a></li>
				<li><a href="/">Services</a></li>
            </ul>
        </div>
        <a class="btn btn-ghost btn-sm" href="/">
            Activities
        </a>
        <a class="btn btn-ghost btn-sm" href="/">
            Events
        </a>
        <a class="btn btn-ghost btn-sm" href="/">
            Resources
        </a>
        <a class="btn btn-ghost btn-sm" href="/">
            Contact
        </a>
</nav>