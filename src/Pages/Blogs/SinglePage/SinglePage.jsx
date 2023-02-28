import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Comment from './Comment'
import axios from 'axios'
import Dark from '../../../components/Dark'
import './SinglePage.scss'
function SinglePage() {
    let {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState({__html: ""});
    const [blog, setBlog] = useState([])
    const [comments, setComments] = useState([])
    const [user, setUser] = useState([])
    const [pop, setPop] = useState('')
    const [btn, setBtn] = useState('Comment');
    const [loading2, setLoading2] = useState(false)
    const token = localStorage.getItem("cooltoken")
    
    useEffect(() => {
        fetchSingleBlog();
        fetchComments();
        
    }, []);
    const fetchSingleBlog = async () => {
      setLoading(true);
        await axios.get(`https://my-brand-production.up.railway.app/blogs/b/${id}`)
          .then(async (res) => {
            setBlog(res.data.BlogFetched);
            setContent({__html: res.data.BlogFetched.content})
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
    };
    const fetchComments = async () => {
      setLoading2(true)
      await axios.get(`https://my-brand-production.up.railway.app/blogs/b/${id}/c`)
      .then(async (res) => {
        let m = []
        for (let i = 0; i < res.data.Comments.length; i++) {
          const response = await axios.get(`https://my-brand-production.up.railway.app/users/u/${res.data.Comments[i]._userId}`)
          const obj = {
            dp: response.data.data.imageUrl,
            usr: response.data.data.username,
            comment: res.data.Comments
          }
          m.push(obj)
        }
        setComments(res.data.Comments);
        setUser(m)
        setLoading2(false)
      })
      .catch((err) => {
        console.log(err);
      });
    }

    function popContact(text, color) {
        setPop(text)
        document.getElementById('pop').style.background = color
        document.getElementById('pop').style.padding = '10px'

        setTimeout(() => {
            setPop('')
            document.getElementById('pop').style.padding = '0px'
        }, 4000);
    }
    function disableBtn(text, bt) {
        setBtn(text)
        document.getElementById('btn').disabled = bt
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const detail = {
            comment: document.getElementById('com').value,
        }
        disableBtn("Loading...", true)
        const rawResponse = await fetch(`https://my-brand-production.up.railway.app/blogs/b/${id}/c`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
          body: JSON.stringify(detail)
          });
          const content = await rawResponse.json();
          if (content.Error) {
            popContact(content.Error, "red")
          }
          if (content.message) {
            popContact(content.message, "green")
            fetchComments()
            document.getElementById('com').value = ""
            disableBtn("Comment", false)
          }
    }
    let isLoggedIn = false
    if (localStorage.getItem("cooltoken") && localStorage.getItem("tempLog")) {
      isLoggedIn = true
    }
    document.getElementById('meta').setAttribute("name", "description");
    document.getElementById('meta').setAttribute("content", blog.title);
    document.getElementById('meta-image').setAttribute("name", "image");
    document.getElementById('meta-image').setAttribute("content", blog.imageUrl);
  return (
    <div className={`singlepage singlepage-${Dark()}` }>
          {loading ? <div className='loader'><div className="spinner"></div></div> : null}
        <div className="front">
          <img src={blog.imageUrl} alt={blog.title} className="back-front" ></img>
          <img src={blog.imageUrl} alt={blog.title} />
          <p>{blog.title}</p>
        </div>
        <div className="content">
          <div dangerouslySetInnerHTML={content} className="content-box"  ></div>
        </div>
        <div className="comment-area">
          {isLoggedIn ? 
          <div className="comment-form">
            <p>Add a Comment</p>
            <div id="pop">{pop}</div>
            <form action="" onSubmit={handleSubmit}>
              <textarea id='com'></textarea>
              <button id='btn'>{btn}</button>
            </form>
          </div> : <p className='comment-form'><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link> to comment</p> }
          <div className="comments">
            <p >Comments</p>
            {loading2 ?
            <div className="loader" >
              <div className="loaderBar"></div>
            </div> : null }
            <div className="comment-holder" id='holder'>
              {comments.map((com, index) => {
                return (
                  <Comment 
                    key={com._id} 
                    username={user[index].usr} 
                    userdp = {user[index].dp}
                    date = {com.date}
                    comment={com.comment} />
                  )
              })}
            </div>
          </div>
        </div>
    </div>
  )
}

export default SinglePage