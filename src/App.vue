<template>
    <div class="grid-container">
        
        <!-- header -->
        <div id="header-left-container">
            <img class="logo" src="@/assets/vueLogo.svg" />
        </div>
        <div id="header-middle-container">
            <div id="app-title">
                <strong>Vue-App-1:</strong> gym customers data
            </div>
        </div>
        <div id="header-right-container">
            <ThemeToggle />
        </div>

        <!-- main content -->
        <div></div>
        <div id="main-content">
            <CustomerData />
        </div>
        <div></div>
        
    </div>
</template>

<script>
import CustomerData from "./pages/CustomerData/CustomerData.vue";
import ThemeToggle from "./components/ThemeToggle.vue";

export default {
    name: 'App',
    components: {
        ThemeToggle,
        CustomerData
    }
}
</script>

<style>
@import "./assets/globalStyles.css";

*{ box-sizing:0 }
body{ 
  background:#f3f3f3;
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.grid-container{
  display:grid;
  grid-template-columns: 20vw 60vw 20vw;
  grid-template-rows:100px calc(100vh - 100px);
}

/* header background color */
.grid-container > #header-left-container,
                #header-middle-container,
                #header-right-container{  
    background: white;
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
