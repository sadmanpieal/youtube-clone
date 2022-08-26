import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class VideoDetail extends Component{
    render(){
        return(

<div className="col-md-8">
<div className="embed-responsive embed-responsive-16by9">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/0SCopio77gM"
  style={{height:'480px',width:'600px'}}
  
  />


</div>
    <div className="details" style={{marginTop:'10px',padding:'10px',border:'1px solid red',borderRadius:'4px'}}>
        <h4>Dokina Hawa</h4>
        <p>song by tahsan</p>

       
    </div>
  </div>
        );

        

    }
}
export default VideoDetail;

<iframe width="918" height="516" src="https://www.youtube.com/embed/0SCopio77gM" title="Dokhino Hawa | Coke Studio Bangla | Season One | Tahsan X Madhubanti" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
