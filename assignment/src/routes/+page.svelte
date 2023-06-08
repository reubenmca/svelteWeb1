<script>
  import Map from "$lib/map.svelte";
  import Test from "$lib/test.svelte";
  let BASE_URL = "https://api.unsplash.com";
  let card_array = [];



  let cardData = [
    {
      "title" : "History and Origins",
      "text" : "Coffee originated in Ethiopia and spread across Arabia and Europe, connecting people with its enticing flavors and stimulating effects.",
      "url" : ""
    },
    {
      "title" : "Art of Brewing",
      "text" : "Brewing coffee is an art that offers a unique sensory experience, where attention to detail and different methods bring out the best flavors.",
      "url" : ""
    },
    {
      "title" : "Health Benefits",
      "text" : "Coffee may have health benefits, including antioxidants that reduce the risk of certain diseases and potential improvements in cognition, mood, and heart health with moderate consumption.",
      "url" : ""
    }
];


  fetch(
    `${BASE_URL}/search/photos/?client_id=IJ8uAZ9dv-CsGOxeDIRnFfJ6JdHv0yLSwG-6fpM_ilk&query=coffee&page=3&orientation=portrait`
  )
    .then((res) => res.json())
    .then((data) => {
      /*console.log(data.results);*/


      var temp = data.results.sort(() => 0.5 - Math.random())/*randomise order of results*/
      temp.forEach((item,i) => {
        //card_array.push(item.urls.regular);/*create array of urls*/
        //card_array = [...card_array]; // svelte specific hack
        cardData[i].url = item.urls.regular;

      })
      /*assign urls into object*/
      /*this can be moved into a singular forEach ???*/
      /*cardData.forEach((d, i) => {
      cardData[i].url=card_array[i];
    })*/
    });

    
// console.log(card_array)
// console.log(cardData);
</script>

<div class="cardLayout">
  {#each cardData as card}
  <Test image = {card.url} title = {card.title} text = {card.text} />
  {/each}
</div>

<Map />