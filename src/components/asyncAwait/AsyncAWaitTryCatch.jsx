import { useState, useEffect } from 'react'

function AsyncAWaitTryCatch() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }

    fetchPost()
  }, [])

  return <div>{post ? <div>{post.title}</div> : <div>Loading...</div>}</div>
}

export default AsyncAWaitTryCatch
