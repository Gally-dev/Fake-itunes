<template>
    <transition class="faded">
        <li class="tunes-song" v-cloak>
            <p>{{ song.artist }} - {{ song.name }}</p>
            <img :src="song.cover" alt="song.cover" />

            <figure>
                <audio controls :src="song.audiofile" volume="0.4"></audio>
                <figcaption >album: {{ shorten(song.album) }}</figcaption>
            </figure>
        </li>
    </transition>
</template>

<script>
import { truncate } from "lodash"; 

    export default {
        props: {
            song: {
                type: Object,
                
            },
        },
        methods: {
            shorten(str) { // truncate string in figcaption
               return truncate(str, {
                'length': 55,
                'separator': '',
                
                });
            }
        },
      
                
    }
</script>

<style lang="css" scoped>
.tunes-song{
    /* border: 1px solid magenta; */
    margin: .6rem;
    padding: 1rem;
    width: 350px;
    height: 310px;
    border-radius: 5px;
    box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    

}
p{
    margin: 8px;
}
img{
    border-radius: 7px;
    border: 2px solid magenta;
}
audio{
    box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
    margin: 0.5rem;
    border-radius: 50px;
}
figure{
    margin: 0;
}
/* .faded-enter-active{
    transition: all 1s ease;
}
.faded-enter{
    transform: scale(0.9);
} */
</style>