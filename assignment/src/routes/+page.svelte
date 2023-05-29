<script>
  import Map from "$lib/map.svelte";
  import Test from "$lib/test.svelte";

  let BASE_URL = "https://api.unsplash.com";
  let card_array = [];
  fetch(
    `${BASE_URL}/search/photos/?client_id=IJ8uAZ9dv-CsGOxeDIRnFfJ6JdHv0yLSwG-6fpM_ilk&query=coffee&page=2&orientation=portrait`
  )
    .then((res) => res.json())
    .then((data) => {
      /*console.log(data.results);*/
      var temp = data.results.sort(() => 0.5 - Math.random()).slice(0, 11);/*randomise order of results*/
      temp.forEach((item) => {
        card_array.push(item.urls.full);/*create array of JUST urls*/
        card_array = [...card_array]; // svelte specific hack
      })
      /*console.log(card_array);*/
      
      
    });
</script>

<div class="cardLayout">
  <!--maybe loop this???-->
  <Test image={card_array[0]} />
  <Test image={card_array[1]} />
  <Test image={card_array[2]} />
</div>
<br />
<!--<Map />-->
