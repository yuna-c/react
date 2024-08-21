import { useNavigate } from 'react-router-dom';

const home = () => {
  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`); // 예: /detail/1
  };
  return (
    <div className="home">
      <h3>home 입니다</h3>
      <button onClick={() => navigate('/gt')}>갓탠다드 페이지로 갈게요!!</button>
      <button onClick={() => goToDetailPage('김르탄')}>Detail</button>
    </div>
  );
};
export default home;
