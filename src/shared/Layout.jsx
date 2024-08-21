import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  h1 {
    font-size: 1.5rem;
  }
  nav {
    a {
      margin-right: 1rem;
      color: white;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Layout = () => {
  return (
    <>
      <StHeader>
        <h1>Todo App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </StHeader>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024. Todo App</p>
      </footer>
    </>
  );
};

export default Layout;
