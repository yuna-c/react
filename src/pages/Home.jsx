import AddForm from '../components/AddForm';
import TodoList from '../components/TodoList';
import styles from '../styles/App.module.css';
import styled from 'styled-components';

const StContainer = styled.section`
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <StContainer className={styles.wrap}>
      <h1>REDUX TODO APP</h1>
      <AddForm />
      <TodoList />
    </StContainer>
  );
};

export default HomePage;
