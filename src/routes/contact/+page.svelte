<script lang="ts">
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
import PageHeader from '$lib/components/PageHeader.svelte';
	import ContactInfo from '$lib/components/contact/ContactInfo.svelte';
</script>

<!-- Page Header -->
<PageHeader
	title="Contact Us"
	subtitle="Get in touch or visit us at our library location."
	bgClass="bg-primary"
/>

<main class="bg-base-100 min-h-screen p-8">
	<MaxWidthContainer>
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- Left Column: Library Information -->
			<section>
				<ContactInfo />
			</section>

			<!-- Right Column: Google Map -->
			<section>
				<div class="overflow-hidden rounded-lg shadow-lg">
					<iframe
						title="Library Location Map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27192.629759803083!2d-77.22355125331306!3d44.242621720433554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d62acfb6de025b%3A0x7f11ec887dce7635!2sTyendinaga%20Township%20Public%20Library!5e0!3m2!1sen!2sca!4v1595164556100!5m2!1sen!2sca"
						class="h-96 w-full"
						frameborder="0"
						style="border:0;"
						allowfullscreen
						aria-hidden="false"
					>
					</iframe>
				</div>
			</section>
		</div>
	</MaxWidthContainer>
</main>
