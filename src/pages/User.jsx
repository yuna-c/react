import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getProjectsByUser, getTodos, getUserByEmail } from '../api/todoList'

// 🌞 enabled
// enabled 옵션은 쿼리(queryFn) 실행 여부를 제어합니다. 기본값은 true(만약 설정하지 않는다면 자동으로 true)이며, false로 설정하면 쿼리가 자동으로 실행되지 않습니다. 이 옵션을 사용하여 특정 이벤트 발생 시 쿼리를 실행

/* 🌞 enabled : 사용 예제 1 Disabling/Pausing Queries (이벤트 발생 시에만 수동 실행하고 싶을 때) */
/* 🌞 enabled : 사용 예제 2 Dependent Queries(useQuery 2개 이상이며 실행순서 설정 필요할 때) */

export default function User() {
  // useQuery로 데이터를 수동으로 가져오기
  const { data: todos, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    enabled: false // 자동으로 실행되지 않음
  })

  const [email, setEmail] = useState('john.doe@example.com') // 이메일 설정 (예시)

  // 첫 번째 쿼리: 이메일을 기반으로 사용자를 가져옴
  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: ['user', email],
    queryFn: getUserByEmail
  })

  const userId = user?.id // user가 존재하면 userId 할당

  // 두 번째 쿼리: userId가 존재할 때만 실행
  const {
    data: projects,
    isLoading: isProjectsLoading,
    isError: isProjectsError
  } = useQuery({
    queryKey: ['projects', userId],
    queryFn: getProjectsByUser,
    enabled: !!userId // userId가 있어야 쿼리 실행
  })

  if (isUserLoading) {
    return <div>사용자 정보를 불러오는 중입니다...</div>
  }

  return (
    <div>
      <h1>사용자 정보</h1>

      <button onClick={() => refetch()}>데이터 불러오기</button>

      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>

      <hr />

      {user && (
        <div>
          <p>이름: {user.name}</p>
          <p>이메일: {user.email}</p>
        </div>
      )}

      <h2>사용자의 프로젝트</h2>
      {isProjectsLoading && <p>프로젝트 정보를 불러오는 중입니다...</p>}
      {isProjectsError && <p>프로젝트 정보를 불러오는데 실패했습니다.</p>}
      <ul>{projects && projects.map((project) => <li key={project.id}>{project.name}</li>)}</ul>
    </div>
  )
}
