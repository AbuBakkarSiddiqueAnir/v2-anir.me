<script>
  import { twJoin } from "tailwind-merge";
  export let scrollToSpecificCompany;
  export let workExperience;
  export let activeSlideIndex;
</script>

<nav
  id="work-slider-navigation"
  class="  bottom-0 left-[0%] top-8 z-20 order-2 flex min-w-20 gap-y-3 md:order-1"
>
  <div class="flex flex-col gap-y-3">
    {#each workExperience as page}
      <button
        aria-label="Previous Slide"
        on:click={() => scrollToSpecificCompany(page.index)}
        class={twJoin(
          "group z-10 overflow-hidden border border-y-green-tint px-3 py-2 text-b-3 font-semibold",
          page.index === activeSlideIndex && "text-green",
        )}
      >
        {page.company}
      </button>
    {/each}
  </div>
</nav>
