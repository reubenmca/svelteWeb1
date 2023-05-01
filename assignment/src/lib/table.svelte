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

<div class="grid">
  <div class="row">
    <div class="column">
      <img src={coffee_array[0]} alt="coffee1" />
      <img src={coffee_array[1]} alt="coffee2" />
      <img src={coffee_array[2]} alt="coffee3" />
      <img src={coffee_array[3]} alt="coffee4" />
    </div>
  </div>
  <div class="row">
    <div class="column">
      <img src={coffee_array[4]} alt="coffee5" />
      <img src={coffee_array[5]} alt="coffee6" />
      <img src={coffee_array[6]} alt="coffee7" />
      <img src={coffee_array[7]} alt="coffee8" />
    </div>
  </div>
</div>
