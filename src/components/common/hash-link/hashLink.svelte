<script>
  import config from "../../../configurations/config";
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let scrollPosition = 0;
  let maxScroll = 0;
  let floatNav = null;
  let activeSectionId = null;
  let sectionElements = null;
  const handleScroll = () => {
    scrollPosition = window.scrollY;
    checkActiveSection();
  };
  let halfViewportHeight = null;
  onMount(() => {
    // Calculating maximum available scrolling distance
    sectionElements = document.querySelectorAll(".main-section");
    halfViewportHeight = window.innerHeight * 0.5;
    maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const checkActiveSection = () => {
    for (const section of sectionElements) {
      const rect = section.getBoundingClientRect();

      // If the top of the section is below the viewport's center
      if (rect.top > halfViewportHeight) break;

      // If the bottom of the section is above the viewport's center
      if (rect.bottom < halfViewportHeight) continue;

      // If the section is within the viewport's center
      activeSectionId = "#" + section.id;
      break;
    }
  };
  // Calculating the position of the nav bar based on scroll position
  $: {
    if (floatNav) {
      scrollPosition = window.scrollY;
      // Ensuring the navigation component never goes out of the screen & kind of stays in the middle
      const newY = Math.min(
        scrollPosition / ((maxScroll / window.innerHeight) * 3),
        document.documentElement.clientHeight - floatNav.offsetHeight
      );

      gsap.to(floatNav, { y: newY, duration: 0.3 });
      checkActiveSection();
    }
  }
</script>

<nav
  bind:this={floatNav}
  class="fixed top-48 right-2 bg-dark-navy py-3 rounded-sm"
>
  <ul>
    {#each config.hashLinks as link}
      <ol
        class={`${
          activeSectionId === link.url ? "bg-active" : ""
        } text-light-slate px-2`}
      >
        <a
          class={`${activeSectionId === link.url ? "active" : ""} text-[14px]`}
          href={link.url}>{link.name}</a
        >
      </ol>
    {/each}
  </ul>
</nav>

<style>
  ul ol {
    /* transition: background 0.2s ease-out; */
  }
  .active {
    color: rgb(0, 0, 0);
  }
  .bg-active {
    background-color: rgb(177, 231, 231);
  }
</style>
