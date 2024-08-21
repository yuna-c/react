import { useNavigate } from 'react-router-dom';

const home = () => {
  const navigate = useNavigate();
  const goToWork = () => {
    navigate('/works');
  };

  return (
    <div className="home">
      <h1>home 페이지 입니다.</h1>
      <button onClick={goToWork}>Works로 이동</button>
    </div>
  );
};
export default home;
