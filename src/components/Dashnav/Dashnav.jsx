import React from 'react'
import { Link } from 'react-router-dom'
import './Dashnav.scss'
function Dashnav() {
  return (
    <div className='dash-nav'>
        <div className="links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboard/new-blog">New Blog</Link>
            <Link to="/dashboard/messages">Messages</Link>
            <Link to="/dashboard">Manage Users</Link>
            <Link to="/dashboard">Add Admin</Link>

        </div>
    </div>
  )
}

export default Dashnav