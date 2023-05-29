<script>
  import Navigation from "$lib/nav.svelte";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
</script>
<!--elements same on all page-->
<Navigation />
<Header />
<slot />
<!--Page specific stuff-->

<Footer />
