<script setup>

import { storeToRefs } from 'pinia';
import { useUserStore } from '~~/stores/user';

const userStore = useUserStore();
const {isLogged, userName} = storeToRefs(userStore);

</script>

<template>
    <div>
        <div v-if="isLogged">
            <span>{{ userName }}</span>
        </div>
        <div v-else>
            <button class="border border-black rounded-xl" @click="userStore.login('woof')">logins here</button>
        </div>
    </div>
</template>