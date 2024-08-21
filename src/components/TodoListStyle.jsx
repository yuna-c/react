import styled from 'styled-components';
// yarn add styled-components

const StTodos = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StTodo = styled.div`
  border: 1px solid #ddd;
  width: calc(100% / 4 - 9px);
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 24px;
  border-radius: 12px;

  p {
    width: 100%;
    margin-bottom: 10px;
    display: block;
  }
`;

const StButtonBox = styled.section`
  width: 100%;
  display: flex;
  gap: 6px;
`;

const StButton = styled.button`
  width: 33.3333%;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  padding: 6px 12px;
  ${(props) =>
    props.color === 'green'
      ? 'background-color: lightgreen;'
      : props.color === 'red'
      ? 'background-color: lightcoral;'
      : 'background-color: #eee;'}
`;

export { StTodos, StTodo, StButtonBox, StButton };
