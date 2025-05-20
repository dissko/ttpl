<!-- src/lib/components/PageHeader.svelte -->
<script lang="ts">
  export let title: string;
  export let subtitle: string = "";
  export let bgClass: string = "bg-base-200";
  export let textColor: string = "text-black";
  export let contact: string | undefined = null;

  let copied = false; // State to track if the email has been copied

  // Function to copy the email to the clipboard
  function copyToClipboard() {
    if (contact) {
      navigator.clipboard.writeText(contact).then(() => {
        copied = true;
        setTimeout(() => (copied = false), 2000); // Reset tooltip after 2 seconds
      });
    }
  }
</script>

<section class="hero {bgClass} py-16">
  <div class="hero-content text-center">
    <div class="max-w-2xl">
      <h1 class="text-5xl font-bold {textColor}">{title}</h1>
      {#if subtitle}
        <p class="{textColor} mt-4">{subtitle}</p>
      {/if}
      {#if contact}
        <div class="mt-4 flex justify-center items-center gap-4">
          <a href="mailto:{contact}" class="btn btn-default ">Email: {contact}</a>
          <div class="tooltip tooltip-bottom" data-tip={copied ? "Copied!" : "Copy Email"}>
            <button class="btn btn-secondary" on:click={copyToClipboard}>Copy Email</button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
