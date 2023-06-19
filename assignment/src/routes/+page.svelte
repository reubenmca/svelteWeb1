<script>
  export let data;
  import Map from "$lib/map.svelte";
  import Test from "$lib/test.svelte";
  
  
  
</script>

<div class="cardLayout">
  {#each data.cardData as card}
    <Test image={card.url} title={card.title} text={card.text} />
  {/each}
</div>

<Map />
