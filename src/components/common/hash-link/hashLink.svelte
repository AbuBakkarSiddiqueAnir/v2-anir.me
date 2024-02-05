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
    // const homepageURL = process.env.HOMEPAGE_URL;
    const homepageURL = "http://127.0.0.1:4321/";
    const currentURL = window.location.href;
    if (currentURL === homepageURL) {
      floatNav.classList.remove("hidden");
    } else {
      floatNav.classList.add("hidden");
    }
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
  class="fixed right-2 top-48 rounded-sm bg-dark-navy py-3"
>
  <ul>
    {#each config.hashLinks as link}
      <li
        class={`${
          activeSectionId === link.url ? "bg-active" : ""
        } px-2 text-light-slate`}
      >
        <a
          class={`${activeSectionId === link.url ? "active" : ""} text-[14px]`}
          href={link.url}>{link.name}</a
        >
      </li>
    {/each}
  </ul>
</nav>

<style>
  .active {
    color: rgb(0, 0, 0);
  }
  .bg-active {
    background-color: rgb(177, 231, 231);
  }
</style>
