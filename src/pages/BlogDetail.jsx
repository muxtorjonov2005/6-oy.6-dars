import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function BlogDetail() {
  const params = useParams(); 
  const navigate = useNavigate()
  const [blog, setBlog] = useParams([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
      console.log(response);
      if(response.status === 200) {
        setBlog(response.data)
      }
      })
     .catch(error => {
        console.log(error);        
      });
  }, [])

  function handleClick() {
    navigate('/blog');
  }
  return (
    <div>
      {
        blog && blog.map((blog, index) => {
          <div key={index}>
            <p>{blog.id}</p>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>{blog.userId}</p>
            <button onClick={handleClick}>Ortga qaytish</button>
          </div>
        })
      }
    </div>
  );
}

export default BlogDetail;
