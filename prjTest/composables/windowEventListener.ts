export function useEventListener(whichEvent:string, callback: any) {

    onMounted(() => {
        window.addEventListener(whichEvent, callback);
    });
    
    onUnmounted(() => {
        window.removeEventListener(whichEvent, callback);
    });
}