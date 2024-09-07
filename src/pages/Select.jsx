// import { useQuery } from '@tanstack/react-query'
// import { useNavigate } from 'react-router-dom'
// import { fetchUsers } from '../api/todoList' // 유저 데이터를 가져오는 API 함수

// function Select() {
//   const navigate = useNavigate()

//   // 모든 사용자 이름을 가져오는 쿼리
//   const {
//     data: users,
//     isLoading,
//     isError
//   } = useQuery({
//     queryKey: ['users'],
//     queryFn: fetchUsers // 유저 데이터를 가져오는 함수
//   })

//   if (isLoading) {
//     return <div>Loading...</div>
//   }

//   if (isError) {
//     return <div>Error loading users</div>
//   }

//   return (
//     <div>
//       <h2>Usernames:</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id} onClick={() => navigate(`/select/${user.id}`)}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Select

import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { fetchUsers, fetchUser } from '../api/todoList' // 유저 데이터를 가져오는 API 함수
import { useState } from 'react'

function Select() {
  const navigate = useNavigate()
  const [selectedUserId, setSelectedUserId] = useState(null)

  // 모든 사용자 이름을 가져오는 쿼리
  const {
    data: users,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers // 유저 데이터를 가져오는 함수
  })

  // 특정 유저 이름만 가져오는 쿼리 (select를 사용하여 username만 선택)
  const { data: selectedUsername } = useQuery({
    queryKey: ['user', selectedUserId],
    queryFn: () => fetchUser(selectedUserId),
    enabled: !!selectedUserId, // selectedUserId가 있을 때만 실행
    select: (user) => user.name // username만 선택
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading users</div>
  }

  return (
    <div>
      {users.map((user) => (
        <li key={user.id} onClick={() => navigate(`/select/${user.id}`)}>
          {user.name} - {user.email}
        </li>
      ))}
      <hr />
      <h2>Usernames:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setSelectedUserId(user.id)}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      {/* 선택된 유저의 username 표시 */}
      {selectedUserId && (
        <div>
          <h3>Selected User's Username:</h3>
          {selectedUsername ? <p>{selectedUsername}</p> : <p>Loading...</p>}
        </div>
      )}
    </div>
  )
}

export default Select
