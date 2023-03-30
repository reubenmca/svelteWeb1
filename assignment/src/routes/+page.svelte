<script>
  import Card from "$lib/card.svelte";
  const cardTitle = "Example Card";
  const cardContent = "This is some example content for the card.";

  import Coffee1 from "$lib/assets/christina-rumpf-LMzwJDu6hTE-unsplash.jpg";
  import Coffee2 from "$lib/assets/clay-banks-_wkd7XBRfU4-unsplash (1).jpg";
  import Coffee3 from "$lib/assets/ante-samarzija-lsmu0rUhUOk-unsplash.jpg";
  import Coffee4 from "$lib/assets/devin-avery-5iRgh_G0eRY-unsplash.jpg";
  import Coffee5 from "$lib/assets/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg";
  import Coffee6 from "$lib/assets/nathan-dumlao-nBJHO6wmRWw-unsplash.jpg";
  import Coffee7 from "$lib/assets/nathan-dumlao-pMW4jzELQCw-unsplash.jpg";
  import Coffee8 from "$lib/assets/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg";
</script>

  <div class="row">
    <div class="column">
      <img src={Coffee1} alt="coffee1" />
      <img src={Coffee2} alt="coffee2" />
      <img src={Coffee3} alt="coffee3" />
      <img src={Coffee4} alt="coffee4" />
    </div>
    <div class="column">
      <img src={Coffee5} alt="coffee5" />
      <img src={Coffee6} alt="coffee6" />
      <img src={Coffee7} alt="coffee7" />
      <img src={Coffee8} alt="coffee8" />
    </div>
  </div>
<br>
  <Card title="Lorem Ipsum" content="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec malesuada nunc. Aenean nec neque
 et nunc condimentum mollis ut sed elit. Nulla eget lobortis dui. Suspendisse ac pretium quam. In semper 
 auctor nulla non vulputate. Curabitur iaculis nunc euismod, lacinia ligula sit amet, euismod mauris. 
 Morbi accumsan sodales tellus non gravida. Curabitur laoreet elit ut urna convallis ullamcorper id vehicula 
 ex. Morbi sollicitudin est ut rutrum consequat. Morbi nulla felis, rutrum sit amet lobortis eu, tempor eu nibh. 
 Donec iaculis finibus ipsum non blandit. Nam lobortis lorem sed blandit finibus. Vivamus elementum erat urna, 
ut condimentum massa ultrices ut." />