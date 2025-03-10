<script lang="ts">
	// Define the about menu items.
	export let items: { label: string; href: string }[] = [
		{ label: "Calendar", href: "/calendar" },
		{ label: "FAQ", href: "/faq" },
		{ label: "Library Board", href: "/board" },
		{ label: "Services", href: "/services" }
	];
</script>

<!-- Large screens (md and up): dropdown menu -->
<div class="hidden md:block dropdown dropdown-end">
	<button tabIndex="0" class="btn btn-ghost btn-sm">
		About
		<i class="fa-solid fa-chevron-down ml-1"></i>
	</button>
	<ul tabIndex="0" class="dropdown-content menu bg-base-200 rounded-box z-[1] w-56 gap-2 p-6 shadow">
		{#each items as item}
			<li><a href={item.href}>{item.label}</a></li>
		{/each}
	</ul>
</div>

<!-- Small screens (mobile): nested list inside a hamburger menu -->
<!-- This assumes you're putting this inside your mobile menu block -->
<div class="block md:hidden">
	<!-- Disabled label -->
	<span class="menu-title text-base-content/50 px-4 py-2 cursor-default select-none">About</span>
	<!-- Nested list -->
	<ul class="ml-4">
		{#each items as item}
			<li class="py-1"><a href={item.href} class="text-sm">{item.label}</a></li>
		{/each}
	</ul>
</div>
