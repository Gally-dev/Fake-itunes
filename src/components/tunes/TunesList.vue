<template>
    <ul>
        <TunesListSong v-for="song in songs" :key="song.id" :song="song"/>
    </ul>
</template>

<script>
import TunesListSong from "@/components/tunes/TunesListSong.vue"

export default {
    components: {
        TunesListSong,
    },
    data() {
        return {
        songs: [
            // {id:1, artist:'Kuli', name:'Tralalala'},
            // {id:2, artist:'Kalimero', name:'Histryyy'},
            // {id:3, artist:'Habanero', name:'Mothertracker'},
      ],
        }
    },
    mounted () {
       window.eventBus.on('new-songs', (data)=>(this.songs = data)) // data sent from SearchForm.vue
    },
}
</script>

<style lang="css" scoped>
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        
    }
   li{
       list-style: none;
   }
</style>