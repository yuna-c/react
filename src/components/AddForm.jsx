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
      addTodo({
        id: +new Date().getTime().toString().slice(0, 10),
        // id: userID,
        title: todo
      })
    );
  };

  return (
    <StFormContainer className="AddForm">
      <form onSubmit={onSubmitHandler}>
        <StInput value={todo} onChange={onHandleInput} type="text" />
        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};
export default AddForm;
