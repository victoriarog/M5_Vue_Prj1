<script setup lang="ts">
type AlertBoxTypes = "error" | "warning" | "success" |"info"

const props = defineProps<{
    type: AlertBoxTypes;
}>()
</script>


<template>
    <div :class="type">
        alert alert beach
        <slot></slot>
    </div>
</template>

<style scoped>
.error {
    color: red;
}
.info {
    color: blue;
}
.warning {
    color: orange;
}
.success {
    color: green;
}
</style>