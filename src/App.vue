<template>
  <section class="grid-container">
    <header>
      <HeaderTitle />
    </header>
    <main>
      <MainContent />
    </main>
    <footer>
      <FooterContent />
    </footer>
  </section>
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
  margin:0;
}
header{
  height:var(--header-height);
  background:#42b883;
}
main{
  justify-content: center;
  min-height:var(--main-height);
  background:white;
}
footer{
  height:var(--footer-height);
  background:#35495e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.item1{ grid-area: header; }
.grid-container{
  display:grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  background:lightblue;
}
</style>
