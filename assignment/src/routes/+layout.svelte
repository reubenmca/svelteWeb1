<script>
  import Navigation from "$lib/nav.svelte";
  import Card from "$lib/card.svelte";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";

  const cardTitle = "Example Card";
  const cardContent = "This is some example content for the card.";
</script>

<Navigation />
<Header />
<br />
<slot />
<!--Page specific stuff-->

<Footer />
