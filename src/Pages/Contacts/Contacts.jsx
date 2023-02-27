import React, { useState } from 'react'
import './Contacts.scss'
function Contacts() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('') 
    const [message, setMessage] = useState('')
    const [btn, setBtn] = useState('SEND');
    const [pop, setPop] = useState('')
    function disableBtn(text, bt) {
        setBtn(text)
        document.getElementById('btn').disabled = bt
    }
    function popContact(text, color) {
        setPop(text)
        document.getElementById('pop').style.background = color
        document.getElementById('pop').style.padding = '10px'

        setTimeout(() => {
            setPop('')
            document.getElementById('pop').style.padding = '0px'
        }, 5000);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        disableBtn("SENDING...", true)
        const msgDetails = {
            email: email,
            name: name,
            message: message
        }
        const rawResponse = await fetch('https://my-brand-production.up.railway.app/messages/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(msgDetails)
        });
        const content = await rawResponse.json();
        disableBtn("SEND", false)
        if (content.message) {
            popContact(content.message, "green")
            setEmail('')
            setMessage('')
            setName('')
        }
        if (content.Error) {
            popContact(content.Error, "red")
        }
        console.log(content)
    }
  return (
    <div className='contacts'>
        <div className="form-container">
            <form action="" onSubmit={handleSubmit} id="frm">
                <div className="pop-up" id='pop'>{pop}</div>
                <div className="title">Contact Me <div className="line"></div></div>
                <div className="input">
                    <p>Email</p>
                    <div className="text">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="input">
                    <p>Name</p>
                    <div className="text">
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                </div>
                <div className="input">
                    <p>Message</p>
                    <div className="text">
                        <textarea cols="10" rows="10" value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                </div>
                <div className="input">
                    <button id='btn'>{btn}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contacts