import { useSelector } from 'react-redux';
import { StTodo, StTodos } from './TodoListStyle';

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  console.log(`todos =>`, todos);

  return (
    <StTodos className="TodoList">
      {todos.map((todo) => {
        return <StTodo key={todo.id}>{todo.title}</StTodo>;
      })}
    </StTodos>
  );
};
export default TodoList;
