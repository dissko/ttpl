<script lang="ts">
	// Define the about menu items.
	export let items: { label: string; href: string }[] = [        
		{ label: "Calendar", href: "/calendar" },        
		{ label: "FAQ", href: "/faq" },
		{ label: "Library Board", href: "/board" },
		{ label: "Services", href: "/services" }
	];
</script>

<div class="dropdown dropdown-end">
	<button tabIndex="0" class="btn btn-ghost btn-sm">
		About
		<i class="fa-solid fa-chevron-down"></i>
	</button>
	<ul tabIndex="0" class="dropdown-content menu bg-base-200 rounded-box z-[1] w-56 gap-2 p-6 shadow">
		{#each items as item}
			<li><a href={item.href}>{item.label}</a></li>
		{/each}
	</ul>
</div>
