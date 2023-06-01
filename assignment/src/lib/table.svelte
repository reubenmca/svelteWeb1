<script>
  //get img from unsplash and put in array
  let BASE_URL = "https://api.unsplash.com";
  let coffee_array = [];
  fetch(
    `${BASE_URL}/search/photos/?client_id=IJ8uAZ9dv-CsGOxeDIRnFfJ6JdHv0yLSwG-6fpM_ilk&query=coffee&per_page=8&orientation=portrait`
  )
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((item) => {
        coffee_array.push(item.urls.full);
        coffee_array = [...coffee_array]; // svelte specific hack
      });
    });


    
</script>

<!--generate table 4x2-->
<div class="grid">
  {#each coffee_array as coffee}
    <div>
      <img src={coffee} alt="coffee4"/>
    </div>
  {/each}
</div>
