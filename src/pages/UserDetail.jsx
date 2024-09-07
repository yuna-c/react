import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api/todoList' // 특정 유저를 가져오는 API 함수

function UserDetail() {
  const { id } = useParams()

  // 특정 사용자의 정보를 가져오는 쿼리
  const {
    data: user,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id) // 유저 ID에 따라 데이터를 가져옴
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading user</div>
  }

  return (
    <div>
      <h1>유저 상세 정보</h1>
      {user ? (
        <div>
          <p>이름: {user.name}</p>
          <p>이메일: {user.email}</p>
        </div>
      ) : (
        <p>유저 정보를 불러올 수 없습니다.</p>
      )}
    </div>
  )
}

export default UserDetail
