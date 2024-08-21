import { useState } from 'react';
import { useEffect } from 'react';

// useEffect => sideEffect를 방지하기 위한 react hook
// https://jsonplaceholder.typicode.com/
const Gt = () => {
  const [무쓸모, set무쓸모] = useState(true);
  const [count, setCount] = useState(0);
  const [외부데이터, set외부데이터] = useState(null);

  // 2개의 인자
  // 첫 번째 인자 : 콜백 함수
  // 두 번째 인자 : DA(의존성 배열)

  useEffect(() => {
    console.log('컴포넌트가 렌더링 되었어요!!!!');

    // 카운터 스테이트가 변경 될때만
    // 엄청 무거운 작업
    // count의 숫자가 변경됨에 따라 외부에서 데이터 다시 가져오기!
    // api 가져올 때 한 번만 작업을 할 때는 의존성 배열을 쓰지 않는다
  }, [count]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        set외부데이터(json);
      });
    console.log(`외부데이터=>`, 외부데이터);
  }, [무쓸모]);

  return (
    <div className="Gt">
      <h2>Gt</h2>
      <br />
      {외부데이터 === null ? (
        <div>로딩중</div>
      ) : (
        <>
          <h3>현재 숫자 : {count}</h3>
          <button
            onClick={() =>
              setCount((prev) => {
                return prev + 1;
              })
            }
          >
            +
          </button>
          <br />
          <button
            onClick={() =>
              set무쓸모((prev) => {
                return !prev;
              })
            }
          >
            무쓸모!!
          </button>
        </>
      )}
    </div>
  );
};
export default Gt;
