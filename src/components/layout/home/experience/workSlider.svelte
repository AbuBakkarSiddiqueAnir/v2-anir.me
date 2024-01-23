<script>
  import Navigation from "./navigation.svelte";
  import emblaCarouselSvelte from "embla-carousel-svelte";

  let projectPages = [
    {
      index: 0,
      title: "1st company",
    },
    {
      index: 1,
      title: "2nd company",
    },
    {
      index: 2,
      title: "3rd company",
    },
    {
      index: 3,
      title: "4th company",
    },
  ];

  let innerWidth = 0;
  let activeSlideIndex = 0;
  let carouselContainer;
  let plugins = [];
  let options = { jump: true, axis: "y", loop: true };
  let api = null;

  const onInit = (event) => {
    api = event.detail;
  };

  const scrollToSpecificCompany = (index) => {
    api.scrollTo(index);
  };
</script>

<svelte:window bind:innerWidth />
<div id="work_carousel" class="mx-auto w-full relative">
  <div
    use:emblaCarouselSvelte={{ plugins, options }}
    on:emblaInit={onInit}
    id="work-viewport"
    class=" mx-auto max-w-full overflow-hidden md:max-w-[100%] xl:max-w-[68%]"
  >
    <div
      bind:this={carouselContainer}
      class="embla__container flex max-h-[15rem]"
    >
      {#each projectPages as page}
        <article
          class="embla__slide flex-1 border border-r-emerald-400 p-3 mb-10"
        >
          <h3 class="text-h-md">Lead Engineer @ Upstatement</h3>
          <p class="text-b-2">May 2018 - Present</p>
          <ul class="text-b-3">
            <li>
              Deliver high-quality, robust production code for a diverse array
              Deliver high-quality, robust production code for a diverse array
            </li>
            <li>
              Deliver high-quality, robust production code for a diverse array
              Deliver high-quality, robust production code for a diverse array
            </li>
            <li>
              Deliver high-quality, robust production code for a diverse array
              Deliver high-quality, robust production code for a diverse array
            </li>
          </ul>
        </article>
      {/each}
    </div>
  </div>
  <Navigation {projectPages} {scrollToSpecificCompany} {activeSlideIndex} />
</div>

<style>
  .embla__container {
    display: flex;
    flex-direction: column;
  }
</style>
