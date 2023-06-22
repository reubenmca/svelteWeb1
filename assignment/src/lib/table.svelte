<script>
  //get img from unsplash and put in array
  let BASE_URL = "https://api.unsplash.com";
  let display = "block";
  let coffee_array = [];
  fetch(
    `${BASE_URL}/search/photos/?client_id=IJ8uAZ9dv-CsGOxeDIRnFfJ6JdHv0yLSwG-6fpM_ilk&query=coffee&per_page=12&orientation=portrait`
  )
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((item) => {
        coffee_array.push(item.urls.regular);
        coffee_array = [...coffee_array]; // svelte specific hack
        display = "none";
      });
    });


    
</script>

<!--generate table 4x2-->
<div class="grid">
  <div style="display: {display} ;grid-column: 1/5;text-align: center;padding: 20px;font-style: italic;">Loading...</div> <!--Loading text while images are fetched--><!--change to a GIF?-->
  {#each coffee_array as coffee} <!--loop through each image fetched and display-->
    <div>
      <img src={coffee} alt="coffee4"/>
    </div>
  {/each}
</div>
