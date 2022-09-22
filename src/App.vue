<script setup>
import CustomerData from "./pages/CustomerData/CustomerData.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import {ref} from "vue";

    const currentTheme = ref('light')
    const headerBackground = ref('#fff')
    const appBackground = ref('#f3f3f3')
    const headerTitleColor = ref('#2c3e50')
    const togglePosition = ref('translateX(0px)')

    function changeTheme(){
        if(currentTheme.value === 'light'){
            currentTheme.value = 'dark'
            headerBackground.value = '#2C3333'
            headerTitleColor.value = '#fff'
            appBackground.value = '#35495e'
            togglePosition.value = 'translateX(50px)'
        }
        else if(currentTheme.value === 'dark'){
            currentTheme.value = 'light'
            headerBackground.value = '#fff'
            headerTitleColor.value = '#2c3e50'
            appBackground.value = '#f3f3f3'
            togglePosition.value = 'translateX(0px)'
        }
    }
</script>

<template>
    <section class="grid-container">
        
        <!-- header -->
        <div id="header-left-container" class="bg-color">
            <img class="logo" src="@/assets/vueLogo.svg" />
        </div>
        <div id="header-middle-container" class="bg-color">
            <div id="app-title">
                <strong>Vue-App-1:</strong> gym customers data
            </div>
        </div>
        <div id="header-right-container" class="bg-color">
            <ThemeToggle 
                v-bind:current-theme="currentTheme"
                v-bind:toggle-position="togglePosition"
                v-bind:toggle-color="toggleColor"
                v-on:change-theme="changeTheme"
            />
        </div>

        <!-- main content -->
        <div></div>
        <div id="main-content">
            <CustomerData />
        </div>
        <div></div>
        
    </section>
</template>

<style scoped>
@import "./assets/globalStyles.css";
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.grid-container{
    background: v-bind(appBackground);
    display:grid;
    grid-template-columns: 20vw 60vw 20vw;
    grid-template-rows:100px calc(100vh - 100px);
}
.bg-color{
    background: v-bind(headerBackground);
}
#header-left-container{
    display:flex;
    align-items: left;
    padding:0 0 0 30px;
}
#header-left-container img{
    aspect-ratio: 1;
    width:55px;
}
#header-middle-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0 0 0 15px;
}
#header-middle-container #app-title{
    font-size:25px;
    color:v-bind(headerTitleColor);
}
#header-right-container{
    display: flex;
    justify-content: right;
    align-items: center;
    padding:0 30px 0 0;
}
#main-content{
    padding:50px 0 0 0;
}
</style>