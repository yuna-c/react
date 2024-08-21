import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTodo } from './../redux/modules/todos';
import { StButton, StFormContainer, StInput } from './AddFormStyle';
import { addTodo } from '../redux/slices/todosSilce';
// import generateUUID from '../hooks/uuid';

const AddForm = () => {
  // const userID = generateUUID();
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const onHandleInput = (e) => {
    const { value } = e.target;
    setTodo(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (todo === '') return;

    dispatch(
      // +new Date().getTime().toString().slice(0, 10),
      addTodo({
        id: new Date().getTime(),
        // id: userID,
        title: todo
      })
    );
  };

  return (
    <StFormContainer className="AddForm">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="todo">Todos의 제목을 입력하세요</label>
        <br />
        <div className="inputText">
          <StInput id="todo" value={todo} onChange={onHandleInput} type="text" />
          <StButton>추가하기</StButton>
        </div>
      </form>
    </StFormContainer>
  );
};

export default AddForm;
