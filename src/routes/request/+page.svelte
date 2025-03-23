<script>
	import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

	// No header and footer for now
</script>

<!-- Hero Section -->
<div class="hero bg-base-200 py-8">
	<div class="hero-content flex-col gap-8 lg:flex-row">
		<!-- Illustration -->
		<img
			src="/book-request.webp"
			alt="Stylized illustration of a person reading with a stack of books"
			class="mx-auto max-w-sm rounded-lg shadow-2xl lg:mx-0"
		/>

		<!-- Intro Text -->
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Request Your Favorite Book</h1>
			<p class="max-w-2xl py-4 text-lg">
				We are always expanding our collection! Fill out the form below to let us know which book
				you'd love to see in our library.
			</p>
		</div>
	</div>
</div>

<MaxWidthContainer>
	<!-- Form Section -->
	<div class="flex justify-center px-4 py-8">
		<div class="card bg-base-100 w-full max-w-lg shadow-2xl" style="max-width: 100% !important;">
			<form action="https://formspree.io/f/xkndwrjp" method="POST" class="card-body space-y-4">
				<!-- Book Title -->
				<div class="grid grid-cols-[auto,1fr] items-center gap-4">
					<label for="title" class="w-40 font-semibold">Book Title</label>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Enter book title"
						class="input input-bordered w-full"
						required
					/>
				</div>
				<!-- Author -->
				<div class="grid grid-cols-[auto,1fr] items-center gap-4">
					<label for="author" class="w-40 font-semibold">Author</label>
					<input
						type="text"
						id="author"
						name="author"
						placeholder="Enter author name"
						class="input input-bordered w-full"
						required
					/>
				</div>
				<!-- Your Name -->
				<div class="grid grid-cols-[auto,1fr] items-center gap-4">
					<label for="name" class="w-40 font-semibold">Your Name</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Enter your name"
						class="input input-bordered w-full"
						required
					/>
				</div>
				<!-- Email Address -->
				<div class="grid grid-cols-[auto,1fr] items-center gap-4">
					<label for="email" class="w-40 font-semibold">Email Address</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email"
						class="input input-bordered w-full"
						required
					/>
				</div>
				<!-- Library Card Number (Optional) -->
				<div class="grid grid-cols-[auto,1fr] items-center gap-4">
					<label for="cardNumber" class="w-40 font-semibold">Library Card # (Optional)</label>
					<input
						type="text"
						id="cardNumber"
						name="cardNumber"
						placeholder="Enter your card number"
						class="input input-bordered w-full"
					/>
				</div>
				<!-- Submit Button -->
				<div class="form-control mt-4">
					<button type="submit" class="btn btn-primary w-full">Submit Request</button>
				</div>
			</form>
		</div>
	</div>
</MaxWidthContainer>
