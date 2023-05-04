<script>
  export let title;
  export let content;
</script>

<div class="card">
  <h3 class="card-title">{title}</h3>
  <div class="card-content">{content}</div>
</div>

<style>
  .card {
    background-color: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.05),
      0 4px 4px rgba(0, 0, 0, 0.05), 0 8px 8px rgba(0, 0, 0, 0.05),
      0 16px 16px rgba(0, 0, 0, 0.05);
    padding: 0.75rem;
    width: 250px;
    float: left;
    margin: 0 0 1rem 1rem;
    margin-left: 35rem;
  }
  .card-title {
    margin-top: 0;
    font-size: 1.2rem;
  }
  .card-content {
    margin-bottom: 0;
    font-size: 1rem;
  }
</style>
