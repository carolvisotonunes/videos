import axios from 'axios';
const KEY= 'AIzaSyBgGvDS0UC7jwc0-jYqjAThX4Uo5wi1EkI';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'videos',
        maxResults:5,
        key: KEY
    }
});