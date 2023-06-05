<script>
  export let image;
  export let text;
</script>

<div class="card">
  <div class="card-image" />
    <img class ="card-image" src = {image} alt=""/>
  <div class="card-description">
    <p class="text-body">
      {text}
    </p>
  </div>
</div>

<style>
  .card {
    height: 300px;
    width: 250px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 16px;
    box-shadow: 0 0 20px 8px #d0d0d0;
    overflow: hidden;
    margin: 20px 20px 0px 20px;
  }

  /*Image*/
  .card-image {
    height: 100%;
    width: 100%;
    position: absolute;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);/*transition effect*/
    object-fit: cover;
  }

  /*Description */
  .card-description {
    display: flex;
    position: absolute;
    gap: 0.5em;
    flex-direction: column;
    background-color: #f5f5f5;
    color: #212121;
    height: 70%;
    bottom: 0;
    border-radius: 16px;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);/*transition effect*/
    padding: 1rem;
  }

  /*Text*/

  .text-body {
    font-size: 1.1rem;
    line-height: 130%;
    font-family: "Oswald", sans-serif;
  }

  /* Hover states */
  .card:hover .card-description {
    transform: translateY(100%);/*hover effect*/
  }
</style>
