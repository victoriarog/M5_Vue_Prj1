<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '~~/stores/user';

// const {x ,y} = useMouseTracker();
// const counter = useState("counter", () => 0);
// function increment() {
//     counter.value++;
// }

const userStore = useUserStore();
const {isLogged, userName} = storeToRefs(userStore);

</script>

<template> 
    <!-- <h1>
        Mouse is at {{ x }}, {{ y }}
    </h1>
    <h1>
        Counter is {{ counter }}
    </h1> -->
    <!-- <button @click="increment">Increase counter</button> -->

    <h2 v-if="isLogged">
        hey, {{ userName }}
    </h2>
    <img v-if="isLogged" src="~assets/img/chiCleanGif.gif"/>


</template>
