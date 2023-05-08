<script>
  import Card from "$lib/card.svelte";
  import Map from "$lib/map.svelte";
  import Image from "$lib/assets/oddSize.jpg";
  const cardTitle = "Example Card";
  const cardContent = "This is some example content for the card.";
</script>

<div class="cardLayout">
  <Card
    title=""
    content="
  Welcome to our coffee website, where we celebrate the art and science of brewing and enjoying coffee. 
  For many of us, coffee is more than just a morning pick-me-up - it's a daily ritual that brings joy, 
  comfort, and inspiration."
    image={Image}
  />
  <Card
    title=""
    content="
  Welcome to our coffee website, where we celebrate the art and science of brewing and enjoying coffee. 
  For many of us, coffee is more than just a morning pick-me-up - it's a daily ritual that brings joy, 
  comfort, and inspiration."
    image={Image}
  />
  <Card
    title=""
    content="
  Welcome to our coffee website, where we celebrate the art and science of brewing and enjoying coffee. 
  For many of us, coffee is more than just a morning pick-me-up - it's a daily ritual that brings joy, 
  comfort, and inspiration."
    image={Image}
  />
</div>
<br />
<Map />
<br />
