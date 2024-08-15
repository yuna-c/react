import './styles/App.css';
import styled from 'styled-components';

// https://npmtrends.com/
// https://styled-components.com/

// 🌞🌞🌞🌞🌞
// yarn add styled-components
// 확장자 Styled-Components Extractor 설치

// 이점 : 조건부 스타일링 가능(if/삼항연산자/switch)
const StBox = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid ${(props) => props.borderColor}; // 4.부모 컴포넌트에서 보낸 props를 받아 사용
  margin: 20px;
  padding: 20px;
`;

const Stp = styled.p`
  color: purple;
  font-weight: 700;
`;
const App = () => {
  return (
    <>
      <h1 style={{ color: 'blue' }}>Hello World</h1> {/* style 객체 key:value pair */}
      <p className='sample'>this is simple app</p> {/* style class */}
      {/* 2. 위에서 만든 styled-components를 사용 */}
      {/* 3. props를 통해 borderColor라는 값을 전달 */}
      <StBox borderColor='red'>빨간 박스</StBox>
      <StBox borderColor='green'>초록 박스</StBox>
      <StBox borderColor='blue'>
        파란박스
        <Stp>스타일이 적용된 P tag</Stp>
      </StBox>
    </>
  );
};

export default App;
