import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './compoments/Home';
import About from './compoments/About';
import Contact from './compoments/Contact';
import Works from './compoments/Works';
import './styles/App.css';

// 🌞🌞🌞🌞🌞
// yarn add react-router-dom

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
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
