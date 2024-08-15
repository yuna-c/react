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
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
  padding: 20px;
`;

const boxList = ['red', 'green', 'blue'];
const getBoxName = (color) => {
  switch (color) {
    case 'red':
      return '빨간 박스';
    case 'green':
      return '초록 박스';
    case 'blue':
      return '파란 박스';
    default:
      return '검정 박스';
  }
};

const App = () => {
  return (
    <>
      {/* <StBox borderColor='red'>빨간 박스</StBox>
      <StBox borderColor='green'>초록 박스</StBox>
      <StBox borderColor='blue'>파란 박스</StBox> */}

      {boxList.map((boxColor) => {
        return (
          <StBox key={boxColor} borderColor={boxColor}>
            {getBoxName(boxColor)}
          </StBox>
        );
      })}
    </>
  );
};

export default App;
