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
        card_array.push(item.urls.regular);/*create array of JUST urls*/
        card_array = [...card_array]; // svelte specific hack
      })
      /*console.log(card_array);*/
      
      
    });
</script>

<div class="cardLayout">
  <!--maybe loop this??? content will have to be removed from loop and stored as a variable-->
  <Test image={card_array[0]} text="History and Origins: Coffee originated in Ethiopia and spread across Arabia and Europe, connecting people with its enticing flavors and stimulating effects."/>
  <Test image={card_array[1]} text="Art of Brewing: Brewing coffee is an art that offers a unique sensory experience, where attention to detail and different methods bring out the best flavors."/>
  <Test image={card_array[2]} text="Health Benefits: Coffee may have health benefits, including antioxidants that reduce the risk of certain diseases and potential improvements in cognition, mood, and heart health with moderate consumption."/>
</div>

<Map />