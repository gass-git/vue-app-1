<template>
    <div id="container">
        <div id="square" @click="changeTheme">
                <fa v-if="lightThemeIsActive" icon="fa-solid fa-sun" class="white-icon" />
                <fa v-else icon="fa-solid fa-moon" class="white-icon" />
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const current = ref('light')
const position = ref('translate(0px)')
const lightThemeIsActive = ref(true)

function changeTheme(){
    if(current.value === 'light'){
        current.value = 'dark'
        position.value = 'translate(50px)'

        setTimeout(() => {
            lightThemeIsActive.value = false
        }, 100)
    }
    else{
        current.value = 'light'
        position.value = 'translate(0px)'

        setTimeout(() => {
            lightThemeIsActive.value = true
        }, 100)
    }
}
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
