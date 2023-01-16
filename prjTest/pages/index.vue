<script setup>
const {x ,y} = useMouseTracker();
</script>

<template> 
    <h1>
        Mouse is at {{ x  }}, {{ y }}
    </h1>
    <img src="~assets/img/chiCleanGif.gif"/>

</template>
