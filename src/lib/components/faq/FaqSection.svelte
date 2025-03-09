<script lang="ts">
    export let faqs: { question: string; answer: string }[];
  </script>
  
  <section>
    {#each faqs as faq, index}
      <div class="collapse-arrow bg-base-100 border-base-300 collapse border m-4">
        <input type="radio" name="faq-accordion" checked={index === 0} />
        <div class="collapse-title font-semibold">{faq.question}</div>
        <div class="collapse-content text-sm">
          {faq.answer}
        </div>
      </div>
    {/each}
  </section>
  