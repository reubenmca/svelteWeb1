<nav id="navbar">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">Gallery</a></li>
  </ul>
</nav>

<style>
  /*add hover effects to nav bar*/
  ul:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 1px;
    display: block;
    transition: all 1s ease;/*transition type*/
    bottom: 20%;
  }
  ul:hover:after {
    width: 100%;
    height: 1px;
    background-color: #fff;
  }
</style>
