import axios from 'axios'
import { useEffect, useState } from 'react'

// 🌞🌞🌞🌞🌞
// 1. 리액트에서 비동기 처리 방법

// 🌞 컴포넌트 마운트 시(useEffect) 처리
// 데이터 패팅하기
// 로딩 및 에러처리

// - 문제점
// 상태 관리의 복잡성(각 상태에 따른 로직이 컴포넌트 내부에 분산)
// 중복된 코드
// 비즈니스 로직의 분리 부족( 핵심 동작을 정의하는 코드, UI 혼합으로 가독성 하락)
// 서버 상태 관리의 어려움

// - 서버 상태 vs 클라이언트 상태
// 클라이언트 상태는 UI 관련된 일시적인 데이터(예: 폼 입력값)를 의미
// 서버 상태는 서버에서 가져오는 데이터(예: API 응답), 캐싱, 동기화, 재검증(revalidate)

// 🌞 해결책
// 1. Redux Middleware 이용
// 액션이 리듀서에 도달하기 전에 중간에서 가로채서 추가적인 작업을 수행
// 비동기 로직을 처리(Redux Thunk, Redux Saga, Redux Observable …), 로그를 기록(redux-logger), 에러를 처리

// - 일반 redux의 처리 방식
// UI 컴포넌트에서 dispatch ->
// dispatch가 일어날 때 action 객체를 dispatch ->
// action 객체는 리듀서로 전달되어 Redux store를 업데이트

// - redux thunk의 처리 방식
// UI 컴포넌트에서 dispatch ->
// dispatch가 일어날 때 thunk 함수(비동기 작업 포함)를 dispatch ->
// 전달된 thunk 함수에 의해 Redux Thunk 미들웨어가 이 함수를 호출하고, 함수 안에서 비동기 작업을 수행 ->
// 비동기 로직이 수행된 이후 필요에 따라 액션 객체를 별도로 생성하여 dispatch ->
// dispatch된 액션 객체는 리듀서로 전달되어 Redux store를 업데이트

// - Redux Thunk
// 상태 관리의 일관성 (Redux Thunk를 사용하여 비동기 로직을 중앙에서 관리)
// 비즈니스 로직의 분리(비동기 로직을 액션 크리에이터로 분리하여 UI 로직과 비즈니스 로직을 분리하고, 유지보수성과 가독성을 향상)
// 로딩 및 에러 상태 관리의 용이성 (Redux Thunk와 Redux Toolkit을 사용하여 isLoading과 isError 등의 상태를 중앙에서 일관되게 관리, 상태 변화에 따른 UI 업데이트가 용이)

// - 불편한 점
// 복잡성 증가 : 액션 크리에이터와 리듀서의 코드가 길고, 보일러플레이트 코드(반복적이고 틀에 박힌 코드)가 많아져 유지보수가 어려움
// 테스트가 복잡 : 액션 크리에이터를 테스트하는 것이 복잡하며, 다양한 응답 상태와 비동기 작업을 시뮬레이션하기 위한 별도의 장치가 필요해 테스트 코드가 복잡

// 🌞 TanStack Query(React Query) : 대안
// 복잡한 비동기 로직을 단순화
// 캐싱, 동기화, 리페칭
//  선언적인 데이터 패칭, 자동 리페칭, 캐싱 등 다양한 기능을 제공하여 서버 상태 관리를 더 쉽고 효율적

export default function Async() {
  const [data, setData] = useState(null)
  // 2. 로딩 및 에러 처리
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 1. 데이터 패칭하기
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('http://localhost:4000/todos')
        setData(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.isDone ? 'Done' : 'Not Done'}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}
