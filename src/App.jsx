import GlobalStyle from './GlobalStyle';
import TestPage from './components/TestPage';
import BlogPost from './components/BlogPost';

import './styles/App.css';

// 🌞🌞🌞🌞🌞
// yarn add styled-components
// 확장자 Styled-Components Extractor 설치

const App = () => {
  const title = '전역 스타일링 제목입니다.';
  const contents = '전역 스타일링 내용입니다.';

  return (
    <>
      <GlobalStyle />
      <TestPage title='제목입니다.' contents='내용입니다.' />
      <BlogPost title={title} contents={contents} />
    </>
  );
};

export default App;
