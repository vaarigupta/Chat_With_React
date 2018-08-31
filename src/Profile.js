import React, { Component } from 'react';
import fire from './fire';
var database = fire.database();
class Profile extends Component 
{
   componentDidMount()
   {
    var id = this.props.match.params.id;
    database.ref("messages/"+id).once("value").then((snapshot)=>
    {
      console.log(snapshot.val());
    })
   }
  render()
   {
    var id =this.props.match.params.id;
    //console.log(id);

  return (
      <p>Profile {id}</p>
    );
  }
}

export default Profile;