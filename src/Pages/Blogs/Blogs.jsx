import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Blogs.scss'
import axios from 'axios';
function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchProducts();
      }, []);
    const fetchProducts = async () => {
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
  return (
    <div className='blogs'>
        <div className="top-bar">
            <form action="">
                <input type="text" name="search" id="search" />
                <button><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>
        {loading ? <div className='loader'><div className="spinner"></div></div> : null}
        <div className="blogs-container">
            { blogs.map(blog => (
                <div className="blog-card" key={blog._id} >
                    <div className="blog-image">
                        <img src={blog.imageUrl} alt="image" />
                    </div>
                    <p>{blog.title}</p>
                    <div className="btn">
                        <Link to={`/single-blog/${blog._id}`} className="readmore-btn">
                            Read More...
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Blogs