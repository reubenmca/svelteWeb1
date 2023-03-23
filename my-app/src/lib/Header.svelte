<script>
    import { onMount } from 'svelte';
    import headerImage from 
    export let imageUrl;
    
    let headerImage;
  
    onMount(() => {
      const headerImageWidth = window.innerWidth;
      headerImage.style.width = `${headerImageWidth}px`;
    });
  </script>
  
  <header>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={https://github.com/reubenmca/svelteWeb1/blob/a5b861488f60bb28fbcfcd2dc59e0608b6116a12/my-app/src/lib/snowHead.jpg} alt="Your header image" bind:this={headerImage}>
  </header>
  
  <style>
    header {
      display: flex;
      justify-content: center;
    }
    
    img {
      height: auto;
      max-width: 100%;
    }
  </style>
  