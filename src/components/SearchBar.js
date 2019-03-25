import React from 'react';
import YTSearch from "youtube-api-search";
var API_KEY='AIzaSyDc5lrSDhFvUGLWRtpzDtpWEySJLKI36pU';

class SearchBar extends React.Component{
constructor(props){
super(props);
 this.state={
   value:"",
   videos : [],
   
}
}

handleChange=(event)=>{
  this.setState({value: event.target.value});
   console.log(this.state.value);
}


handleSubmit=(event)=> {
  YTSearch({key: API_KEY, term:`${this.state.value}`},(videos)=>{
    this.setState({videos:`${videos}`})
    var temp=videos[0].id.videoId;
  this.setState({embedvideo:<iframe width="800" height="800" title="nothing" src={`https://www.youtube.com/embed/${temp}`}/>});
   });
  }
render(){
return(
<div>
<form onClick={this.handleSubmit}>
  <input type="text" name="search" value={this.state.val} onChange={this.handleChange} placeholder="Search.."/>
  <input type="submit" />
</form>
{this.state.embedvideo}
</div>
)


}



}

export default SearchBar;