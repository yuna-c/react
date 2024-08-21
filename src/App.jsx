import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './compoments/Home';
// import About from './compoments/About';
// import Contact from './compoments/Contact';
// import Works from './compoments/Works';

import Home from './pages/Home';
import Gt from './pages/Gt';

import './styles/App.css';
import Detail from './pages/Detail';
import Test from './pages/Test';

// 🌞🌞🌞🌞🌞
// yarn add react-router-dom

// 동적 라우트 path="/detail/:id"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 어디로 오면 어디로 보낼지! */}
          {/* 1. 어디로 오면 : path */}
          {/* 2. 어디로 보낼찌 : element */}
          {/* path="/" 아무것도 없을 때 */}
          {/* yarn dev 재시작 */}

          <Route path="/" element={<Home />} />
          <Route path="/Gt" element={<Gt />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/test/:first/:second" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
