import React,{ Component } from 'react';

class VideoListItem extends Component{
    render(){
        const {src,tittle}=this.props
        return(
          <li className='list-group-item media videolist'>
            <img  className='mr-3'
            src={src}  />
            <div className="media-body">
                {tittle}
            </div>

          </li>
        )
    }

    
}
export default VideoListItem;