import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../assets/styles/blogs.css'
function Blogs() {
  const location = useLocation()
  console.log(location.state);

  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
        console.log(response);
        if(response.status === 200) {
          setBlogs(response.data)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function handleClick(id) {
    navigate(`/blog/${id}`)
    
  }
  return (
    <div className='blog_container'>
      {
        blogs.length > 0 && blogs.map((blog, index) => {
          return (
            <div className='blog_item' key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <p>Author: {blog.id}</p>
              <button onClick={() => handleClick(blog.id)} className='blogButton'>Tafsilotlar</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blogs