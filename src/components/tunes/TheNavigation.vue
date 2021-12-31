<template>
    <div class="navigation">
        <!-- <router-link to="/">Tunes</router-link> | -->
        <!-- <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>  -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .navigation {
    padding: 30px;
    }

    .navigation a {
    font-weight: bold;
    color: #2c3e50;
    }

    .navigation a.router-link-exact-active {
    color: #42b983;
    }
   
</style>