import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './../redux/modules/todos';
import { StButton, StFormContainer, StInput } from './AddFormStyle';
// import generateUUID from '../hooks/uuid';

const AddForm = () => {
  // const userID = generateUUID();
  const [title, setTodo] = useState('');
  const dispatch = useDispatch();

  const onHandleInput = (e) => {
    const { value } = e.target;
    setTodo(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title === '') return;

    dispatch(
      addTodo({
        id: +new Date().getTime().toString().slice(0, 10),
        // id: userID,
        title
      })
    );
  };
  return (
    <StFormContainer className="AddForm">
      <StInput value={title} onChange={onHandleInput} type="text" />
      <StButton onClick={onSubmitHandler}>추가하기</StButton>
    </StFormContainer>
  );
};
export default AddForm;
