import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom'

function Blogs() {
  const location = useLocation()
  console.log(location.state);
  const params = useParams()
  console.log(params);
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

  function handleClick(e) {
    e.preventDefault()
    
  }
  return (
    <div>
      {
        blogs.length > 0 && blogs.map((blog, index) => {
          return (
            <div key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <p>Author: {blog.id}</p>
              <button onClick={handleClick} className='blogButton'>Tafsilotlar</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blogs