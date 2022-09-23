<script setup>
import {ref} from "vue";

// components
import CustomerData from "./pages/CustomerData/CustomerData.vue";
import ThemeToggler from "./components/ThemeToggler.vue";

// colors
import colors from "./assets/themeColors"

    const {lightGrey, darkBlue, blueVue, dark, white} = colors
    const currentTheme = ref('light')
    
    // current theme colors
    const appBackground = ref(lightGrey)
    const headerBackground = ref(white)
    const headerTitleColor = ref(darkBlue)

    function changeTheme(){
        if(currentTheme.value === 'light') setTheme('dark')
        else setTheme('light')
    }

    function setTheme(themeName){
        currentTheme.value = themeName
        
        switch(themeName){
            case 'light':
                appBackground.value = lightGrey
                headerBackground.value = white
                headerTitleColor.value = darkBlue
                break;
            case 'dark':
                appBackground.value = blueVue
                headerBackground.value = dark
                headerTitleColor.value = white
                break;
        }
    }
</script>

<template>
    <section class="grid-container">
        
        <!---- header ---->
        <div id="header-left-container" class="bg-color">
            <img class="logo" src="@/assets/vueLogo.svg" />
        </div>
        <div id="header-middle-container" class="bg-color">
            <div id="app-title">
                <strong>Vue-App-1:</strong> 
                gym customers data
            </div>
        </div>
        <div id="header-right-container" class="bg-color">
            <ThemeToggler
                v-bind:current-theme="currentTheme"
                @change-theme="changeTheme"
            />
        </div>

        <!---- main ---->
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