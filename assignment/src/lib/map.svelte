<script>
  //all this was done by chatGPT 
  import { onMount } from "svelte";
  const API_KEY = "AIzaSyBAjKFUOaeNDcOP3hRd_6Rn82q8hhi5Rgg";
  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 0, lng: 0 },
      zoom: 15,
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        map.setCenter(pos);

        const request = {
          location: pos,
          radius: "500",
          query: "coffee shops",
        };

        const service = new google.maps.places.PlacesService(map);

        service.textSearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              const place = results[i];
              new google.maps.Marker({
                map,
                position: place.geometry.location,
                title: place.name,
              });
            }
          }
        });
      });
    }
  }

  onMount(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);
  });
</script>

<div id="map" style="height: 500px; width: 80%; margin: 0 auto; margin-top: 20px;"/>
