import styled from 'styled-components';
// yarn add styled-components

const StFormContainer = styled.div`
  padding: 30px 0;

  form {
    label {
      display: block;
    }
    .inputText {
      width: 100%;
      display: flex;
      gap: 24px;
    }
  }
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  /* margin: 0 24px; */
  height: 25px;
  width: 100%;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

export { StFormContainer, StButton, StInput };
