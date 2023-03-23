<script>
    import Navigation from '$lib/nav.svelte';
    import Card from '$lib/Card.svelte';
    import Header from '$lib/Header.svelte';
  
    const cardTitle = 'Example Card';
    const cardContent = 'This is some example content for the card.';
    
  
  </script>

<Navigation />
<Header />
<br>
<slot /> <!--Page specific stuff-->

<Card title={cardTitle} content={cardContent} />

<footer>
    
</footer>