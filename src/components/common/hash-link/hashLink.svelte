<script>
  import config from "../../../configurations/config";
</script>

<nav class="fixed top-8 right-2 bg-slate">
  <ul>
    {#each config.hashLinks as link}
      <ol class="text-lightest-slate"><a href={link.url}>{link.name}</a></ol>
    {/each}
  </ul>
</nav>
