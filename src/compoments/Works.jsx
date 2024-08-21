import { useNavigate, useLocation } from 'react-router-dom';

const Works = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    navigate('/');
  };

  console.log(`pathname=>`, location);

  return (
    <div className="Works">
      <h1>Works 페이지 입니다.</h1>
      <div>현재페이지 : {location.pathname.slice(1)}</div>
      <button onClick={goToHome}>Home로 이동</button>
    </div>
  );
};
export default Works;
