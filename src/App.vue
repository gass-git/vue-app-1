<template>
    <div class="grid-container">
      <header>
        <HeaderTitle />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <FooterContent />
      </footer>
    </div>
</template>

<script>
import MainContent from './components/MainContent.vue'
import FooterContent from './components/FooterContent.vue'
import HeaderTitle from './components/HeaderTitle.vue'

export default {
  name: 'App',
  components: {
    HeaderTitle,
    MainContent,
    FooterContent
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
header{
  height:var(--header-height);
  background:#42b883;
}
main{
  min-height:var(--main-height);
  background:white;
}
footer{
  height:var(--footer-height);
  background:#35495e;
}
.grid-container{
  display:grid;
  grid-template-columns: auto;
  grid-template-rows:auto auto auto;
}
</style>
