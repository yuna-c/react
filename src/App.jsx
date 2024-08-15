import { useEffect, useRef, useState } from 'react';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// useRef
// useState와 더불어 특정 값을 저장(저장 공간)하는데 쓰임
// rendering/re-rendering과 상관없이 값을 기억하기 위해 사용되는 것
// DOM요소 핸들링시 쓰임

// useState와 useRef의 차이
// useState: rendering/ re-rendering 관련 O
// useRef : rendering 관련 X

const App = () => {
  const idRef = useRef('');
  const pwRef = useRef('');

  const [id, setId] = useState('');

  const onIdChangeHandler = (e) => {
    setId(e.target.value);
  };

  // 최초 랜더링 시에만 focus
  useEffect(() => {
    idRef.current.focus();
    if (id.length > 10) {
      pwRef.current.focus();
    }
  }, [id]);

  return (
    <>
      <div>
        아이디 : <input type='text' ref={idRef} onChange={onIdChangeHandler} />
      </div>
      <div>
        비밀번호 : <input type='password' ref={pwRef} />
      </div>
    </>
  );
};

export default App;
