<template>
    <form action="#" @submit.prevent="getMusic()">
      <input type="text" v-model="query"  ref="searchInput" @keyup="search()" />
    </form>
</template>

<script>
import axios from "axios";
import _, { debounce } from "lodash"; //eslint-disable-line

    export default {
        data() {
            return {
                query: "",
                limit: 8,
            }
        },

       mounted () {
         this.$refs.searchInput.focus();
       },

        methods: {
          search: debounce(function(){
            this.getMusic();
          }, 700),
          
        getMusic() {
            //   console.log(this.query);
        axios
          .get(`https://itunes.apple.com/search?term=${encodeURI(this.query)}&limit=${this.limit}&entity=musicTrack`)
          .then((response) => {
              let resData = response.data.results
                .map((song) =>  this.extractData(song));
                // console.log(resData);
              
              window.eventBus.emit('new-songs', resData) //send data to Tunelist.vue
            
            })
        },
        extractData({
          artistId: id,
          artistName: artist,
          previewUrl: audiofile,
          artworkUrl100: cover,
          trackName: name,
          collectionName: album,
          
        }) {
          return { id, artist, audiofile, cover, name, album };
        },
   
      },
      
    }
</script>

<style lang="css" scoped>
input{
  outline: none;
  width: 300px;
  height: 35px;
  border-radius: 100px;
  border: 2px solid rgb(65, 56, 56);
  font-size: 1.5rem;
  color: #2c3e50;
  padding-left: 15px;
  letter-spacing: .5px;
}

</style>