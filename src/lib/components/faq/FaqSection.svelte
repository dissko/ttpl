<script lang="ts">
  import { marked } from 'marked';

  export let faqs: { question: string; answer: string }[];

  // Convert answers to HTML once at load time
  const faqsWithHtml = faqs.map((faq) => ({
    ...faq,
    answerHtml: marked(faq.answer)
  }));
</script>

<section>
  {#each faqsWithHtml as faq, index}
    <div class="collapse-arrow bg-base-100 border-base-300 collapse m-4 border">
      <input type="radio" name="faq-accordion" checked={index === 0} />
      <div class="collapse-title font-semibold">{faq.question}</div>
      <div class="collapse-content text-sm">
        <div class="prose max-w-none">
          {@html faq.answerHtml}
        </div>
        
      </div>
    </div>
  {/each}
</section>
