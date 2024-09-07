import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTodo } from '../api/todoList'

export default function Detail() {
  // 잘못된 방식 (v5에서는 작동하지 않음)
  // const { data: todo, isLoading } = useQuery(['todo', id], () => getTodo(id))

  const { id } = useParams()
  const {
    data: todo,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['todo', id], // 쿼리 키는 객체 내에서 queryKey로 전달
    queryFn: () => getTodo(id) // 쿼리 함수는 queryFn으로 전달 getTodo(id)
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>Error fetching todo</h1>
  }
  return (
    <div>
      <h1>투두 상세 "id: {id}"</h1>
      {todo ? <h2>{todo.content}</h2> : <h2>No Content Available</h2>}
    </div>
  )
}
