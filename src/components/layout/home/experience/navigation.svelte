<script>
  import { twJoin } from "tailwind-merge";
  export let scrollToSpecificCompany;
  export let projectPages;
  export let activeSlideIndex;
</script>

<nav class=" absolute flex gap-y-3 left-[0%] z-20 bottom-0 top-8 min-w-20">
  <div class="flex gap-y-3 flex-col">
    {#each projectPages as page}
      <button
        aria-label="Previous Slide"
        on:click={() => scrollToSpecificCompany(page.index)}
        class={twJoin(
          "group z-10 overflow-hidden text-b-3 px-3 py-2 border border-y-green-tint font-semibold",
          page.index === activeSlideIndex && "text-green"
        )}
      >
        {page.title}
      </button>
    {/each}
  </div>
</nav>
