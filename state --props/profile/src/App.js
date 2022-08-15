import Profile from './Profile/Profile';
import './App.css';

import image from './profilePic.jpg'
import React ,{ Component, useState } from 'react';
 class App extends React.Component {
  
  state={
    id:1,
    fullname:'Dwayne The Rock',
    email:'theRockIsCooking@WWE.com',
    role:'Admin',
    password:'BigWayne2020WWE',
    image:image,
    username:'Rocky',
    show:false ,
    date: new Date(),
    time:0
            }
  


 toggle=()=>{
  this.setState({show:(!this.state.show)});
  

    }
  render(){
    let time=(new Date()-this.state.date)
   
    return (
    <div>
      {this.state.show&&
      <Profile fullname={this.state.fullname} email={this.state.email} role={this.state.role} password={this.state.password} image={this.state.image}  />
      }
      <button onClick={this.toggle}>show</button>
      <h1>{time/1000 + " s"}</h1>
      
    
    </div>
  );
    }
}

export default App;
