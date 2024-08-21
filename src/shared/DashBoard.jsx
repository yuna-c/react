// http://localhost:5173/dashboard/mypage 이런식으로 가고 싶을 때

import { Outlet } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className="DashBoard">
      <h1>DashBoard</h1>
      <Outlet />
    </div>
  );
};
export default DashBoard;
