import { useEffect } from 'react';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// useEffect
// 리액트 컴포넌트가 렌더링 된 이후마다 특정 작업을 수행하도록 설정할 수 있는 Hook
// 어떤 컴포넌트가 화면에 보여졌을 때 내가 무언가를 실행하고 싶을 때, 어떤 컴포넌트가 화면에서 사라졌을 때 무언가를 실행하고 싶을 때
// 함수형 컴포넌트를 사용할 때는 useEffect를 주로 사용하여 핸들링

const App = () => {
  useEffect(() => {
    // 화면에 컴포넌트가 나타났을(mount) 때 실행하고자 하는 함수를 넣어주세요.
    console.log('Soksea');

    // clean up 함수 : 리소스 정리, 메모리 누수 방지,  unmount될 때, 컴포넌트가 안보일 때 사용
    return () => {
      // 화면에서 컴포넌트가 사라졌을(unmount) 때 실행하고자 하는 함수를 넣어주세요.
      console.log('안녕히 계세요 여러분! 전 이 세상의 모든 굴레와 속박을 벗어 던지고 제 행복을 찾아 떠납니다! 여러분도 행복하세요~~!');
    };
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      <br />
    </>
  );
};

export default App;
