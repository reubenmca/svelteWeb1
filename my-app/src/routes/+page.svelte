<!--CSS style-->
<style>

    button{
        background-color:black;
        color: yellow;
        border:none;
        padding:3px;
    }
    h1{
        color:blue;
        font-size:34px;
        font-style:italic;
    }
</style>

<!--JAVASCRIPT functionality-->
<script>
    let count = 0;
    let count2 = 1;
    let audio;
    function incrementCount()
    {
        count++;
        audio.play()
    }

    function buttonSize()
    {
        let pad = document.getElementById("increaseSize");
        count2++;
        pad.style.padding = (count2)+"vw";
        pad.style.fontSize = (count2)+"rem";
    }


    function buttonSmall()
    {
        let pad = document.getElementById("increaseSize");
        if (count2 != 1){
            count2 = count2-1;
        }
        
        pad.style.padding = (count2)+"vw";
        pad.style.fontSize = (count2)+"rem";
    }
</script>

<!--HTML structure-->
<button on:click={incrementCount} id = "increaseSize" on:click={buttonSize} on:keydown={buttonSmall}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<audio id = "bruh" src="https://cdn.freesound.org/previews/506/506582_11033252-lq.mp3" bind:this={audio}></audio>
