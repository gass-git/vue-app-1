<template>
    <div id="container">
        <div id="square" @click="changeTheme"></div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const current = ref('light')
const position = ref('translate(0px)')

function changeTheme(){
    if(current.value === 'light'){
        current.value = 'dark'
        position.value = 'translate(50px)'
    }
    else{
        current.value = 'light'
        position.value = 'translate(0px)'
    }
}

</script>


<style scoped>
    #container{
        width:100px;
        height:50px;
        border:1px solid #c9c9c9;
        border-radius:5px;
        
    }
    #square{
        margin:2px;
        aspect-ratio: 1;
        height:46px;
        border-radius:3px;
        background:#41b883;
        cursor:pointer;
        transition: 300ms;
        transform:v-bind(position);
    }
</style>
