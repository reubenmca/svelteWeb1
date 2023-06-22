<script>
  export let data;//get data from +page.js
  import Map from "$lib/map.svelte";
  import Test from "$lib/test.svelte";
</script>

<!--display the amount of cards that there is content for--> 
<div class="cardLayout">
  {#each data.cardData as card}
    <Test image={card.url} title={card.title} text={card.text} />
  {/each}
</div>

<Map />
