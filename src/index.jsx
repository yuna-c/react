import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
1-1 styled-component
1-3 useState
1-4 useEffect
1-5 useContext(provider)
1-6 useref(무한 스크롤)
1-7 memozation(깜빡임)
1-8 customHook

1-10 redux(리덕스 툴킷)
1-16 react router dom
1-17 react router dom
1-18 react router dom
*/
