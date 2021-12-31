<template>
  <div class="tunes">
    <h1>iTunes</h1>

    <TunesSearchForm autofocus/>
    <TunesList/>
    
  </div>
</template>

<script>

import TunesSearchForm from "@/components/tunes/TunesSearchForm.vue";
import TunesList from "@/components/tunes/TunesList.vue";

export default {
  data() {
    return {
      
      
      
    };
  },
  components: {
      TunesSearchForm,
      TunesList,
  },
  methods: {
      
  },
};
</script>

<style lang="css" scoped>

ul {
  padding: 0;
}
ul li {
  list-style: none;
}
/* img{
    width: 150px;
} */
</style>