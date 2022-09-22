<template>
    <div id="container">
        <div id="square" @click="$emit('changeTheme')">
                <fa v-if="props.currentTheme === 'light'" 
                    icon="fa-solid fa-sun" 
                    class="white-icon" 
                />
                <fa v-else 
                    icon="fa-solid fa-moon"
                    class="white-icon" 
                />
        </div>
    </div>
</template>

<script setup>
import { defineProps, watchEffect,ref } from 'vue'

const props = defineProps({currentTheme: String, position: String})
const position = ref('translateX(0px)')

watchEffect(() => {
    position.value = props.position
})

</script>

<style scoped>
    #container{
        width:100px;
        height:50px;
        border:2px solid #d5d5d5;
        border-radius:5px;
        
    }
    #square{
        margin:2px;
        aspect-ratio: 1;
        height:46px;

        display:grid;
        place-items:center;

        border-radius:3px;
        background:#41b883;
        cursor:pointer;
        transition: 300ms;
        transform:v-bind(position);
    }
    .white-icon{
        color:#fff;
        font-size:25px;
    }
</style>
