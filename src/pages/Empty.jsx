// import { useQuery } from '@tanstack/react-query'
// import { getTodos } from '../api/todoList'
import { Link } from 'react-router-dom'
export default function Empty() {
  // const { data, refetch, isFetching, isError, error } = useQuery({
  //   queryKey: ['todos'],
  //   queryFn: getTodos
  // })
  // console.log('빈페이지에서 todos: ', data)
  // console.log('isFetching : ', isFetching)

  return (
    <>
      <h1>빈 페이지입니다.</h1>

      <button>
        <Link to={'/'}>메인 화면으로 이동</Link>
      </button>
    </>
  )
}
