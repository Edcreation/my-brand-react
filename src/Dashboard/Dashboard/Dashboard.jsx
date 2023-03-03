import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Dashboard.scss'
function Dashboard() {
    const admin = JSON.parse(localStorage.getItem("tempLog"))
    const [blogs, setBlogs] = useState([])
    const [item, setItem] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchBlogs();
      }, []);
    const fetchBlogs = async () => {
        setLoading(true);
        await axios
          .get('https://my-brand-production.up.railway.app/blogs')
          .then(async (res) => {
            setBlogs(res.data.Blogs);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
    };
    const putDate = (date) => {
        let Ndate = new Date(date)
        return Ndate.toLocaleDateString()
    }
  return (
    <div className='dashboard'>
        <div className="top-box">
            <div className="box-image">
                <img src={admin.imageUrl} alt="" />
            </div>
            <div className="box-text">
                <div className="t1">
                    Admin Name: <span>{admin.username}</span>
                </div>
                <div className="t1">
                    Admin Email: <span>{admin.email}</span> 
                </div>
            </div>
        </div>
        <div className="middle-box">
            <div className="g-box">
                <i className="fa fa-users" aria-hidden="true"></i>
                <p>359 Users</p>
            </div>
            <div className="g-box">
                <i className="fa fa-book" aria-hidden="true"></i>
                <p>100 Blogs</p>
            </div>
            <div className="g-box">
                <i className="fa fa-heart" aria-hidden="true"></i>
                <p>24k Likes</p>
            </div>
            <div className="g-box">
                <i>Hello</i>
                <p>35 Users</p>
            </div>
        </div>
        <div className="bottom-box">
            <div className="title">Manage Blogs</div>
            <div className="blogs-box">
            {loading ? <div className='loader'><div className="spinner"></div></div> : null}
                {blogs.map(blog => (
                <div className="blog-box" key={blog._id}>
                    <div className="blog-details">
                        <p className='blog-title'>{blog.title}</p>
                        <p className='blog-date'>{putDate(blog.date)}</p>
                        <div className="blog-btns">
                            <button>Edit</button>
                            <button>Freeze</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>

                ))}
                
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard