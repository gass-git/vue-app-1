<template>
    <div class="grid-container">
        <AppHeader />
        <AppMain />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,
        AppFooter
    }
}
</script>

<style>
@import "./assets/globalStyles.css";

*{
  box-sizing:0;
}
body{ 
  margin:0;
  padding:0; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.grid-container{
  display:grid;
  grid-template-columns: auto;
  grid-template-rows:auto auto auto;
}
</style>
