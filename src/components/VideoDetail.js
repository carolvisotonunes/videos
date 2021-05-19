import React  from 'react';

const VideoItem = ({video}) =>{
    if(!video){
       return <div> Loading ... </div>;
    }
    return <div>{video.snippet.title}</div>
};

export default VideoItem;