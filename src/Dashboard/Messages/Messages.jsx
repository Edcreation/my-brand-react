import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Messages.scss'
function Messages() {
  const [loading, setLoading] = useState(false)
  const [pop, setPop] = useState('')
  const [btn, setBtn] = useState('Delete');
  const token = localStorage.getItem("cooltoken")
  const [message, setMessage] = useState([])
  function popContact(text, color) {
    setPop(text)
    document.getElementById('pop').style.background = color
    document.getElementById('pop').style.padding = '10px'
  
    setTimeout(() => {
        setPop('')
        document.getElementById('pop').style.padding = '0px'
    }, 5000);
  }
  function disableBtn(text, bt) {
    setBtn(text)
    document.getElementById('btn').disabled = bt
  }
  useEffect(() => {
    fetchMessages();
  }, []);
const fetchMessages = async () => {
    setLoading(true);
    const rawResponse = await fetch('https://my-brand-production.up.railway.app/messages', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    });
    const messages = await rawResponse.json();
    setMessage(messages.Messages)
    setLoading(false)
};
const deleteMessage = async (id) => {
  const token = localStorage.getItem("cooltoken")
  const rawResponse = await fetch(`https://my-brand-production.up.railway.app/messages/delete/${id}`, {
    method: 'DELETE',
    headers: {
    'Authorization' : `Bearer ${token}`
  }
  });
  const content = await rawResponse.json();
  
  if (content.Error) {
    popContact(content.Error,"red")
  } else if(content.message) {
    popContact(content.message ,"green")
    setTimeout(() => {
      fetchMessages()
    }, 5000);
  }
}

  return (
    <div className='messages'>
      <div className="pop-up" id='pop'>{pop}</div>
      <div className="title">Messages</div>
      <div className="msgs-box">
        {loading ? <div className='loader'><div className="spinner"></div></div> : null}
        {message.map(message => (
        <div className="msg-box" key={message._id}>
          <div className="msg-details">
            <p className='msg-title'>{message.name}</p>
            <p className='msg-title'>{message.message}</p>
            <div className="msg-btns">
              <button>Edit</button>
              <button>Freeze</button>
              <button id='btn' onClick={() => deleteMessage(message._id)}>Delete</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Messages