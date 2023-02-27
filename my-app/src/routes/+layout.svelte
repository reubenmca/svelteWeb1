<script>
    import Navigation from '$lib/nav.svelte';
    import Card from '$lib/Card.svelte';
  
    const cardTitle = 'Example Card';
    const cardContent = 'This is some example content for the card.';
    
  
  </script>
  

  
<Navigation />


<slot /> <!--Page specific stuff-->
<br>

  <Card title={cardTitle} content={cardContent} />
  <br>
  <Card title='Hello' content='Goodbye'/>

<footer>
    <Navigation />
</footer>