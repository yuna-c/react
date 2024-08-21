import { useNavigate } from 'react-router-dom';

const Works = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="Works">
      <h1>Works 페이지 입니다.</h1>
      <button onClick={goToHome}>Home로 이동</button>
    </div>
  );
};
export default Works;
