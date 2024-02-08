<script>
  import Navigation from "./navigation.svelte";
  import emblaCarouselSvelte from "embla-carousel-svelte";

  const workExperience = [
    {
      index: 0,
      position: "Frontend Developer",
      company: "Otterdev",
      location: "Singapore/Remote",
      period: "01/2023 - 02/2024",
      whatIDid: "",
      projects: [
        {
          name: "Otterdev Official Website",
          technologies: ["Astro", "Svelte", "ReactJS", "Sanity", "GSAP"],
          link: "otterdev.io",
        },
        {
          name: "Anytech Website",
          technologies: ["Astro", "Svelte", "ReactJS", "Sanity"],
          link: "https:anytxn.com",
        },
      ],
    },
    // {
    //   index: 1,
    //   position: "Mern Stack Developer",
    //   company: "Coredevs",
    //   location: "Bangladesh/Hybrid",
    //   period: "2/2023 - 4/2023",
    //   whatIDid: "",
    //   projects: [
    //     {
    //       name: "Realtime Ambulance Management System",
    //       technologies: ["ReactJS", "Express", "MongoDB", "RestAPI"],

    //       link: "",
    //     },
    //   ],
    // },
    {
      index: 2,
      position: "Software Developer",
      company: "Besnik/Uihut",
      location: "Onsite",
      period: "04/2022 - 01/2023",
      whatIDid: "",
      projects: [
        {
          name: "Ezytor Website Builder",
          technologies: ["Laravel Blade", "ReactJS"],
          link: "",
        },
        {
          name: "Graphicsly WordPress Plugin",
          technologies: ["ReactJS"],
          link: "",
        },
        {
          name: "Flowgiri and Chrome Extension",
          technologies: ["ReactJS"],
          link: "",
        },
        {
          name: "Uihut Website",
          technologies: ["NuxtJS", "AdonisJS"],
          link: "",
        },
        {
          name: "Console (Web3 Project)",
          technologies: ["NextJS"],
          link: "",
        },
      ],
    },
    // Add more experiences as needed
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
    activeSlideIndex = index;
    api.scrollTo(index);
  };
</script>

<svelte:window bind:innerWidth />
<div
  id="work_carousel"
  class="inter relative mx-auto flex w-full flex-col gap-x-3 md:flex-row"
>
  <Navigation {workExperience} {scrollToSpecificCompany} {activeSlideIndex} />

  <div
    use:emblaCarouselSvelte={{ plugins, options }}
    on:emblaInit={onInit}
    id="work-viewport"
    class="order-1 w-[99%] overflow-hidden md:order-2 md:w-[70%]"
  >
    <div bind:this={carouselContainer} class="embla__container flex h-[16rem]">
      {#each workExperience as company}
        <article
          class="embla__slide mb-12 min-h-[13rem] flex-1 overflow-y-auto border border-green border-y-green-tint p-3"
        >
          <div class="flex justify-between">
            <h3 class="text-puple-light mb-3 text-[1.2rem]">
              {company.position}
            </h3>
            <p class="text-[12px]">{company.period}</p>
          </div>

          <div>
            <h4 class="te mb-2 text-[0.9rem] text-white">Contributions:</h4>
            <ul class="text-b-3">
              {#each company.projects as project}
                <article class="mb-3">
                  <h6 class="mb-2 flex gap-x-2 text-[0.9rem] text-green">
                    {project.name}
                    <a href={project.link} target="_blank">
                      <img
                        class="w-4"
                        src="/icons/externalLink.svg"
                        alt=""
                      /></a
                    >
                  </h6>
                  <ol class="flex flex-wrap gap-4">
                    {#each project.technologies as technology}
                      <li
                        class="rounded-lg border border-green px-2 py-[2px] text-[0.8rem]"
                      >
                        {technology}
                      </li>
                    {/each}
                  </ol>
                </article>
              {/each}

              <li></li>
            </ul>
          </div>
        </article>
      {/each}
    </div>
  </div>
</div>

<style>
  .embla__container {
    display: flex;
    flex-direction: column;
  }

  .embla__slide::-webkit-scrollbar {
    width: 3px;
  }

  .embla__slide::-webkit-scrollbar-thumb {
    background-color: #4caf50;
  }

  .embla__slide::-webkit-scrollbar-thumb:hover {
    background-color: #45a049;
  }

  .embla__slide::-webkit-scrollbar-corner {
    background-color: #333;
  }

  .embla__slide::-webkit-scrollbar-track-piece:drag {
    background-color: #ddd;
  }

  .embla__slide::-webkit-scrollbar-thumb:drag {
    background-color: #999;
  }
</style>
