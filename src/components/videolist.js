import React,{ Component } from 'react';
import VideoListItem from './videolistitem';

class VideoList extends Component{
    render(){
        return(
            <ul className=" list group col-md-4">
             <VideoListItem
             src="https://i.ytimg.com/vi/J3raFUQ1L5g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUgdKB-rDEdUPg3o03zhaklQwPxQ"
             title="Tahsan"
             
             />
            </ul>
        )
    }

    
}
export default VideoList;
