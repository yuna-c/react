// 1. react-router-dom을 사용하기 위해서 아래 API들을 import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../compoments/Home';
import About from '../compoments/About';
import Contacts from '../compoments/Contacts';
import Contact from '../compoments/Contact';
import Works from '../compoments/Works';
import DashBoard from './DashBoard';
import Layout from './Layout';
import MyPage from '../compoments/MyPage';
import Test from '../compoments/Test';

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        {/* 
						Routes안에 이렇게 작성합니다. 
						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

						path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
				*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* 아래 코드를 추가해주세요. 👇 */}
        <Route path="/contacts/:id" element={<Contact />} />
        // http://localhost:5173/dashboard/test
        <Route path="dashboard" element={<DashBoard />}>
          <Route path="mypage" element={<MyPage />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
};
export default Router;
