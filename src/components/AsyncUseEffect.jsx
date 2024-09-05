import { useState, useEffect } from 'react'
export default function AsyncUseEffect() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    console.log('시작')

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => {
        setPost(json)
        console.log('데이터 가져오기 완료')
      })

    console.log('끝')
  }, [])

  return <div>{post ? <div>{post.title}</div> : <div>Loading...</div>}</div>
}
