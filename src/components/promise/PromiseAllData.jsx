// 두 개의 API 호출을 병렬로 처리하는 예제
// 모든 비동기 작업이 완료되면 데이터를 설정합니다.
import { useState, useEffect } from 'react'
import promiseAll from '../../assets/image/promiseAll.png'

function PromiseAllData() {
  const [data, setData] = useState({ posts: [], users: [] })

  useEffect(() => {
    // 두 개의 처리를 동시에 시작해요.
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
    ])
      .then(([posts, users]) => {
        setData({ posts, users })
      })
      .catch((error) => console.error('데이터 펫칭 오류! => ', error))
  }, [])

  return (
    <div>
      <h1>Posts and Users Data</h1>
      <img src={promiseAll} alt="promiseAll 이미지" style={{ width: '400px' }} />
      <div>
        <h2>Posts</h2>
        {data.posts.length > 0 ? (
          data.posts.map((post) => <div key={post.id}>{post.title}</div>)
        ) : (
          <div>Loading posts...</div>
        )}
      </div>
      <div>
        <h2>Users</h2>
        {data.users.length > 0 ? (
          data.users.map((user) => <div key={user.id}>{user.name}</div>)
        ) : (
          <div>Loading users...</div>
        )}
      </div>
    </div>
  )
}

export default PromiseAllData
