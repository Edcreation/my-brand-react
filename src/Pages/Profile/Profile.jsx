import React from 'react'
import './Profile.scss'
import defaultImage from '../../Assets/Images/default.png'
function Profile() {
    
    const user = JSON.parse(localStorage.getItem("tempLog"))
    if (user.imageUrl === "") {
        user.imageUrl = defaultImage
    }
    return (
    <div className='profile'>
        <div className="profile-dp">
            <img src={user.imageUrl} alt="display picture" />
        </div>
        <div className="profile-name">
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    </div>
  )
}

export default Profile