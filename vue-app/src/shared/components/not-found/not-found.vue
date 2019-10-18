<template>
            <div>
                <div id="app1">
                <div>Err...404 [:(] </div>
                <div class="txt">
                    Uh..oh....looks like you're lost somewhere...<span class="blink">_</span>
                </div>
                </div>                
            </div>
</template>

<script>
export default {
    name:"NotFound"
}
</script>

<style scoped>
*{
   font-family: 'Press Start 2P', cursive;
   box-sizing: border-box;
}
#app1{
   padding: 1rem;
   background: white;
   display: flex;
   height: 100%;
   justify-content: center; 
   align-items: center;
   color: gray;
   text-shadow: 0px 0px ;
   flex-direction: column;
   .txt {
      font-size: 1.8rem;
   }
}
@keyframes blink {
    0%   {opacity: 0}
    49%  {opacity: 0}
    50%  {opacity: 1}
    100% {opacity: 1}
}

.blink {
   animation-name: blink;
    animation-duration: 1s;
   animation-iteration-count: infinite;
}
</style>
