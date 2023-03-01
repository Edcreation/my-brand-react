import React from 'react'
import defaultImage from '../../../Assets/Images/default.png'
function Comment(props) {
    let image = props.userdp
    if (image === "") {
        image = defaultImage
    }
    const date = new Date(props.date)
    let datem = date.getTime() 
    function timeSince(date) {

      var seconds = Math.floor((new Date() - date) / 1000);
    
      var interval = seconds / 31536000;
    
      if (interval > 1) {
        return Math.floor(interval) + " years";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes";
      }
      return Math.floor(seconds) + " seconds";
    }

  return (
  <div className="comment">
    <div className="com-image"><img src={image} alt="" /><p >{props.username}</p></div>
    <div className="com">{props.comment}</div>
    <div className="com-date">{timeSince(datem)} ago</div>
  </div>
  )
}

export default Comment