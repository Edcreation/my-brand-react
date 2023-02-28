import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Blogs.scss'
import Dark from '../../components/Dark';
import axios from 'axios';
function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [item, setItem] = useState("")
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
    
    const searchBlogs = async (e) => {
        e.preventDefault()
        setLoading(true);
        const detail = {
            search: item
        }
        const rawResponse = await fetch('https://my-brand-production.up.railway.app/blogs/search', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(detail)
          });
          const content = await rawResponse.json();
          setBlogs(content.BlogFetched)
          setLoading(false)
      };
      
  return (
    <div className={`blogs ${Dark()}`}>
        <div className="top-bar" >
            <form action="" onSubmit={searchBlogs}>
                <input type="text" value={item} onChange={e => setItem(e.target.value)} />
                <button ><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>
        {loading ? <div className='loader'><div className="spinner"></div></div> : null}
        <div className="blogs-container">
            {blogs.map(blog => (
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
                    </div>))
            }
        </div>
    </div>
  )
}

export default Blogs