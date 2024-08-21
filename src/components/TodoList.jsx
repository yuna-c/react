import { useDispatch, useSelector } from 'react-redux';
import { StButton, StButtonBox, StTodo, StTodos } from './TodoListStyle';
import { deleteTodo, toggleTodo } from '../redux/slices/todosSilce';
// import { deleteTodo, toggleTodo } from '../redux/modules/todos';

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  console.log(`todosToolkit =>`, todos);
  const dispatch = useDispatch();

  // handler
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const onToggleHandler = (id) => {
    dispatch(toggleTodo({ id }));
  };

  // TodoList, DoneList
  const todoList = [];
  const doneList = [];

  todos.forEach((todo) => {
    if (todo.isDone) doneList.push(todo);
    else todoList.push(todo);
  });

  return (
    <>
      <h2>할 일</h2>
      <StTodos className="TodoList">
        {todoList.map((todo) => {
          return (
            <StTodo key={todo.id}>
              <p>{todo.title}</p>
              <StButtonBox>
                <StButton
                  color="green"
                  onClick={() => {
                    onToggleHandler(todo.id);
                  }}
                >
                  완료
                </StButton>
                <StButton
                  color="red"
                  onClick={() => {
                    onDeleteHandler(todo.id);
                  }}
                >
                  삭제
                </StButton>
              </StButtonBox>
            </StTodo>
          );
        })}
      </StTodos>
      <br />

      <h2>완료한 일</h2>
      <StTodos>
        {doneList.map((todo) => (
          <StTodo key={todo.id}>
            <p>{todo.title}</p>
            <StButtonBox>
              <StButton color="green" onClick={() => onToggleHandler(todo.id)}>
                취소
              </StButton>
              <StButton color="red" onClick={() => onDeleteHandler(todo.id)}>
                삭제
              </StButton>
            </StButtonBox>
          </StTodo>
        ))}
      </StTodos>
    </>
  );
};
export default TodoList;
