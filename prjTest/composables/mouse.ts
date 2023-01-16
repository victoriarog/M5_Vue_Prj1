import {Ref} from 'vue';

export function useMouseTracker() {

const x:Ref<number> = ref(0);
const y = ref(0);

const onMouseMoved = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
};

onMounted(() => {
    window.addEventListener("mousemove", onMouseMoved)
});

onUnmounted(() => {
    window.removeEventListener("mousemove", onMouseMoved)
});

return {x , y}

}