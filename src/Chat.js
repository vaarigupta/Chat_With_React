import React, { Component } from 'react';
import fire from './fire.js';
class Chat extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      messages: [],
      newMessage :""
    }
  }
  componentDidMount()
  {
    var database = fire.database();
    database.ref("/messages").on("child_added", (snapshot)=>{ // on is a listener 
      var msg = snapshot.val();
      var curr = this.state.messages;
      curr.push(msg);
      this.setState(
      {
        messages :curr
      })
      console.log(msg);
    })
  }
  sendMessage()
  {
   var database = fire.database();
   database.ref("/messages").push().set({
    body: this.state.newMessage,
    author: "vaari"
   })
   this.setState(
   {
    newMessage :""
   })
  }

  render() {
    
    return (
      <div>
      <h1> Chat </h1>
      <div>
      {
        this.state.messages.map((msg,i)=>{
          return (
          <div key={i}>{msg.body} - {msg.author } </div>

          )
        })
      }
      </div>
      <input value ={this.state.newMessage}
       onChange={(e)=>{
        this.setState(
        {
          newMessage : e.target.value
        })
       }} ></input>
      <button onClick ={()=>{
          this.sendMessage();
        }
      }>Send</button>
      </div>
    );
  }
}

export default Chat;
/// 
