import React,{ Component } from 'react';
import axios from 'axios';
class App extends Component{
  state ={
    searchTerm : ' ',
    data:{}
  }
  handleChange =(event)=>{
    const value =event.target.value;
    const newState ={searchTerm:value,data:this.state.data};
    this.setState(newState)
  }
  componentDidMount(){
    console.log('ami hollam component did mount')
  }
  componentDidUpdate(preProps,prevState){
    const getYoutubeVideos =()=>{
      const url ='https://www.googleapis.com/youtube/v3/search';
      const key = process.env.API_KEY;
      const type ='video';
      const part ='snippet';
      const q =this.state.searchTerm;

      const targetUrl =`${url}?key=${key}&type=${type}&part=${part}&q=${q}`;
      const promise =axios.get(targetUrl);
      const success =(response)=>{
        console.log('successful');
        console.log(response.data);

        const newState ={searchTerm:this.state.searchTerm, data: response.data}
        this.setState(newState);

      }
      const error =()=>{
        console.log('Error');
        console.log(error)
      }
      promise
      .then(success)
      .catch(error);
    }
     if(prevState.searchTerm !== this.state.searchTerm) getYoutubeVideos();
  }
  


render() {
  const items =this.state.data.items || []
  return (
    <div className="container">
      <div style={{margin:'20px',textAlign:'center'}}>
        <input onChange={this.handleChange} style={{width:'75%'}}/>
        <br/> <span>{this.state.searchTerm}</span> 

      </div>
      <div className="row">
        <div className="col-md-8">
          <ul className=" list group col-md-4">
            {
              items.map(item=>{
                const imgUrl = item.snippet.thumbnails.default.url;
                const tittle = item.snippet.thumbnails.tittle;
                return(
                       <li className="list group item video videoList">
                       <img className="mr-3"
                        src={imgUrl}/>
                        
                        
              
                       <div className="media-body">
                       {tittle}
                       </div>
                       </li>

                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
}

export default App;
