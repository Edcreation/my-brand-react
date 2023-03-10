import React, { useEffect, useState } from 'react'

function Bbar(props) {
  let id = props.id
  let uid
  if (localStorage.getItem("tempLog")) {
    uid = JSON.parse(localStorage.getItem("tempLog"))._id
  }
  let count = props.likecount
  const [liked, setLiked] = useState(false)
  let arr = JSON.parse(localStorage.getItem(`${uid}_likes`) || "[]")
  localStorage.setItem(`${uid}_likes`, JSON.stringify(arr))
  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == id) {
        setLiked(true)
      }
    }
  }, [])
  
  const Like = async () => {
    const token = localStorage.getItem("cooltoken")
    const rawResponse = await fetch(`https://my-brand-production.up.railway.app/blogs/b/${id}/like`, {
      method: 'PUT',
      headers: {
      'Authorization' : `Bearer ${token}`
    }
    });
    const content = await rawResponse.json();
    if (content.Message === 'Liked') {
      setLiked(true)
      arr.push(id)
      localStorage.setItem((`${uid}_likes`), JSON.stringify(arr))
    } else {
      setLiked(false)
      function removeItemAll(arr, value) {
        var i = 0;
        while (i < arr.length) {
          if (arr[i] === value) {
            arr.splice(i, 1);
          } else {
            ++i;
          }
        }
        return arr;
      }
      removeItemAll(arr, id)
      localStorage.setItem(`${uid}_likes`, JSON.stringify(arr))
    }
  }
  const scrollToComments = () => {
    const element = document.getElementById('comments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  let isLoggedIn = false
    if (localStorage.getItem("cooltoken") && localStorage.getItem("tempLog")) {
      isLoggedIn = true
    }
  return (
    <div className='bar'>
      {isLoggedIn ? <div className="likes-btn">
        {liked ? 
          <i className="fa fa-heart" onClick={Like}  style={{ color: 'red' }} aria-hidden="true"> Liked {count}</i>
          : <i className="fa fa-heart" onClick={Like} style={{ fontWeight: '400', }} aria-hidden="true"> Like {count}</i>
      }
      </div>
      : <button>{count} Likes</button> }
      <button onClick={scrollToComments}>{props.length} <i className="fa fa-comments" aria-hidden="true"></i> Comments</button>
    </div>
  )
}

export default Bbar