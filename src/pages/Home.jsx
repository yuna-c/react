import { useNavigate } from 'react-router-dom';

const home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h3>home 입니다</h3>
      <button onClick={() => navigate('/Gt')}>갓탠다드 페이지로 갈게요!!</button>
      <button onClick={() => navigate('/Detail')}>Detail</button>
    </div>
  );
};
export default home;
