import React, { Component } from 'react'
import './Project.css'
export class Project extends Component {
    constructor(){
        super()
        this.state={
            time:10,
            Score:0
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.tick,1000);
    }
    tick = ()=>{
      if(this.state.time!==0){
        this.setState({
            time:this.state.time -1
        })
      }
    //   else{
    //     alert("Time is up!!!!!");
        
    //   }
    }
    incrementCount=()=>{
        if(this.state.time!==0){
        this.setState({
            Score: this.state.Score +1
        })
    }
         }
    
  render() {
    return (
      <div class="container" >
        <h1>Click the picture as many as u can in {this.state.time} seconds!</h1>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNkVfZC0nvDr-zFZqhIghFhROZFQ-YxosPQ&usqp=CAU" width="15%" margin-top="2%" onClick={this.incrementCount}  />
         <h2>Score:{this.state.Score}</h2>
         <p>Enough! I can't be beaten by you</p>
         <button onClick={()=>{
          this.setState({
            Score:0,
            time:10 })
          }}>Restart</button>
      </div>
    )
  }
}

export default Project