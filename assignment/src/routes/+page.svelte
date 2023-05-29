<script>
  import Map from "$lib/map.svelte";
  import Image from "$lib/assets/oddSize.jpg";
  import Test from "$lib/test.svelte";

  let BASE_URL = "https://api.unsplash.com";
  let card_array = [];
  fetch(
    `${BASE_URL}/search/photos/?client_id=IJ8uAZ9dv-CsGOxeDIRnFfJ6JdHv0yLSwG-6fpM_ilk&query=coffee&page=2&orientation=portrait`
  )
    .then((res) => res.json())
    .then((data) => {
      /*console.log(data.results);*/
      card_array = data.results(() => 0.5 - Math.random()).slice(0, 11);/*randomise order of results*/
      /*console.log(card_array);*/
    });
</script>

<div class="cardLayout">
  <!--maybe loop this???-->
  <Test image={Image} /><!--change image to index of card_array-->
  <Test image={Image} />
  <Test image={Image} />
</div>
<br />
<!--<Map />-->
