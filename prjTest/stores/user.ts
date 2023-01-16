import {defineStore} from 'pinia';

export const useUserStore = defineStore("user", () => {

    // state
    const name = ref(' ');
    const logged = ref(false);

    // getters
    const userName = computed(() => name.value);
    const isLogged = computed(() => logged.value);

    //actions
    function login(_name: string, _password:string):void {
        
        console.log('login', _name)
        logged.value = true;
        name.value = _name;

    }

    return {userName, isLogged, login};
});