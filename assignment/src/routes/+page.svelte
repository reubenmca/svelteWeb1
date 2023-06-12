<script>
  export let data;
  import Map from "$lib/map.svelte";
  import Test from "$lib/test.svelte";
  let BASE_URL = "https://api.unsplash.com";
  
  let display = "none";
  function showMap() {
  var x = document.getElementById("map");
  if (display === "none") {
    return display = "auto";
  } 
  else {
    return display = "none";
  }
}
</script>

<div class="cardLayout">
  {#each data.cardData as card}
    <Test image={card.url} title={card.title} text={card.text} />
  {/each}
</div>

<button on:click={showMap()}>Coffee Near Me</button>
<div id = "map" style="display: {display};">
<h2 class="map-title">Coffee Shops Near You</h2>
<Map />
</div>