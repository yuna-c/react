import { useQueryClient } from '@tanstack/react-query'
import { Link, useLocation } from 'react-router-dom'
import { fetchMovieData } from '../api/movie'

export default function Header() {
  const { pathname } = useLocation()

  const queryClient = useQueryClient()

  // 🔥 Prefetching
  const onMouseOver = () => {
    if (pathname !== '/') return
    // The results of this query will be cached like a normal query
    // prefetch 할 queryKey와 queryFn 은 이동할 페이지의 쿼리와 동일해야 적절합니다.
    queryClient.prefetchQuery({
      queryKey: ['movies', 1],
      queryFn: fetchMovieData
    })
  }

  // const prefetchTodos = async () => {
  //   // The results of this query will be cached like a normal query
  //   // prefetch 할 queryKey와 queryFn 은 이동할 페이지의 쿼리와 동일해야 적절합니다.
  //   await queryClient.prefetchQuery({
  //     queryKey: ['todos'],
  //     queryFn: fetchTodos
  //   })
  // }
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        padding: 20,
        backgroundColor: 'whitesmoke'
      }}
    >
      <Link to={'/'}>TODO LIST</Link>
      <Link to={'/pagination'} onMouseOver={onMouseOver}>
        페이지네이션
      </Link>
      <Link to={'/fetchmore'}>더보기</Link>
      <Link to={'/infinite'}>무한스크롤</Link>
    </div>
  )
}
