import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const Detail = () => {
  const 변수이름아무거나 = useParams();
  console.log('Params:', 변수이름아무거나);

  const 이름 = 변수이름아무거나.id;
  console.log('ID:', 이름);

  const [쿼리파람, set쿼리파람] = useSearchParams();
  console.log(쿼리파람);

  // get 필수 => ?age=20
  const 나이 = 쿼리파람.get('age');
  console.log('Age:', 나이);

  const location = useLocation();
  console.log('Location:', location);

  return (
    <>
      <div className="Detail">
        <h3>{이름}님 안녕하세요</h3>
        <button onClick={() => set쿼리파람('age=50')}>파람 바꾸기</button>
      </div>
    </>
  );
};
export default Detail;
