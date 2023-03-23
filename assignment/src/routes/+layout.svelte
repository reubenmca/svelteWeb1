<script>
    import Navigation from '$lib/nav.svelte';
    import Card from '$lib/card.svelte';
    import Header from '$lib/header.svelte';
  
    const cardTitle = 'Example Card';
    const cardContent = 'This is some example content for the card.';
    
  
  </script>
  

  
<Navigation />
<Header />

<slot /> <!--Page specific stuff-->


  <!-- <Card title={cardTitle} content={cardContent} />
  <br>
  <Card title='Hello' content='Goodbye'/> -->

<footer>
    
</footer> 