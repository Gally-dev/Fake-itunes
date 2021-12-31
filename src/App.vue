<template>
  <div id="app">
    <header>
        <TheNavigation/>
    </header>

    <main class="content">
      <router-view />
    </main>
  
  </div>
  
</template>

<script>
  import TheNavigation from "@/components/tunes/TheNavigation.vue";

  export default {
      components: {
        TheNavigation,
      },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 700;
}
body{
  background: #ecf0f3;
  max-width: 1200px;
  margin: 0 auto;
}
[v-cloak]{
  display: none;
}


</style>
