<script setup>
const {x ,y} = useMouseTracker();
const counter = useState("counter", () => 0);
function increment() {
    counter.value++;
}
</script>

<template> 
    <h1>
        Mouse is at {{ x  }}, {{ y }}
    </h1>
    <h1>
        Counter is {{ counter }}
    </h1>
    <button @click="increment">Increase counter</button>

    <img src="~assets/img/chiCleanGif.gif"/>

</template>
