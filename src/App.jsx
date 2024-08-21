import styles from './styles/App.module.css';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const App = () => {
  return (
    <StContainer className={styles.wrap}>
      <h1>REDUX TODO APP</h1>
      <AddForm />
      <TodoList />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  min-width: 800px;
  margin: 0 auto;
`;
