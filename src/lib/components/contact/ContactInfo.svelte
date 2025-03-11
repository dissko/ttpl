<script lang="ts">
	// Accept the contact data as a prop
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

<div class="flex flex-col gap-6">
	<!-- Library Address -->
	<div class="flex items-center">
		<div class="flex-shrink-0">
			<i class="fa-solid fa-map-marker-alt text-2xl text-primary"></i>
		</div>
		<div class="ml-4">
			<h4 class="font-bold text-lg">Library Address</h4>
			<p>
				{contact.streetAddress}<br>
				{contact.cityProvince}<br>
				{contact.postalCode}
			</p>
		</div>
	</div>

	<!-- Email -->
	<div class="flex items-center">
		<div class="flex-shrink-0">
			<i class="fa-solid fa-paper-plane text-2xl text-primary"></i>
		</div>
		<div class="ml-4">
			<h4 class="font-bold text-lg">E-mail</h4>
			<p>
				<a href={`mailto:${contact.email}`} class="hover:underline">
					{contact.email}
				</a>
			</p>
		</div>
	</div>

	<!-- Phone -->
	<div class="flex items-center">
		<div class="flex-shrink-0">
			<i class="fa-solid fa-phone text-2xl text-primary"></i>
		</div>
		<div class="ml-4">
			<h4 class="font-bold text-lg">Phone Number</h4>
			<p>
				<a href={`tel:${contact.phone}`} class="hover:underline">
					{contact.phone}
				</a>
			</p>
		</div>
	</div>

	<!-- Social Links -->
	<div class="flex items-center">
		<div class="flex-shrink-0">
			<i class="fa-solid fa-share-alt text-2xl text-primary"></i>
		</div>
		<div class="ml-4">
			<h4 class="font-bold text-lg">Follow Us</h4>
			<p class="flex gap-4">
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
	</div>
</div>
