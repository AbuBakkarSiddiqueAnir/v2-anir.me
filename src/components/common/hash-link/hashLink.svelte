<script>
  import config from "../../../configurations/config";
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let scrollPosition = 0;
  let maxScroll = 0;
  let floatNav;

  onMount(() => {
    // Calculate maximum available scrolling distance
    maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    window.addEventListener("scroll", handleScroll);
    gsap.to(floatNav, { y: 0, duration: 0.01 });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    scrollPosition = window.scrollY;
  };

  // Calculate the position of the nav bar based on scroll position
  $: {
    if (floatNav) {
      scrollPosition = window.scrollY;

      // Ensure the navigation component never goes out of the screen
      const maxY =
        document.documentElement.clientHeight - floatNav.offsetHeight;
      const newY = Math.min(scrollPosition, maxY);

      gsap.to(floatNav, { y: newY, duration: 0.3 });
    }
  }
</script>

<nav
  bind:this={floatNav}
  class="fixed top-8 right-2 bg-dark-navy py-3 px-2 rounded-sm"
>
  <ul>
    {#each config.hashLinks as link}
      <ol class="text-lightest-slate"><a href={link.url}>{link.name}</a></ol>
    {/each}
  </ul>
</nav>
