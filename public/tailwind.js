/* 🔥 styles.css */
// .container {
//   padding: 20px;
// }

// @media (max-width: 768px) {
//   .container {
//     padding: 10px;
//   }
// }

/* 🔥 Styled-components */
// import React from 'react'
// import './styles.css'

// const SampleComponent = () => {
//   return <div className="container">반응형 웹</div>
// }

// export default SampleComponent

// SampleComponent.jsx

/* 🔥 react-responsive */
// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   padding: 20px;

//   @media (max-width: 768px) {
//     padding: 10px;
//   }
// `;

// const SampleComponent = () => {
//   return (
//     <Container>
//       반응형 웹
//     </Container>
//   );
// }

// export default SampleComponent;

/* 🔥 tailwind.css */
// - Tailwind CSS 공식 문서
// https://tailwindcss.com/docs/responsive-design

// - Theme 활용하기
// tailwind.config.js 의 theme을 활용하여 스크린 사이즈, 컬러, 폰트 등 다양한 디자인 프리셋을 만들어 활용
// https://tailwindcss.com/docs/theme

// - 스크린 사이즈 지정하기
// https://tailwindcss.com/docs/screens

// tailwind.config.js 에 screen 설정

// 모바일 first
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       'sm': '640px',
//       // => @media (min-width: 640px) { ... }

//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
//       // => @media (min-width: 1536px) { ... }
//     }
//   }
// }

// 웹 first
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       '2xl': {'max': '1535px'},
//       // => @media (max-width: 1535px) { ... }

//       'xl': {'max': '1279px'},
//       // => @media (max-width: 1279px) { ... }

//       'lg': {'max': '1023px'},
//       // => @media (max-width: 1023px) { ... }

//       'md': {'max': '767px'},
//       // => @media (max-width: 767px) { ... }

//       'sm': {'max': '639px'},
//       // => @media (max-width: 639px) { ... }
//     }
//   }
// }

// - 컬러 지정하기
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },
//     colors: {
//       'blue': '#1fb6ff',
//       'purple': '#7e5bef',
//       'pink': '#ff49db',
//       'orange': '#ff7849',
//       'green': '#13ce66',
//       'yellow': '#ffc82c',
//       'gray-dark': '#273444',
//       'gray': '#8492a6',
//       'gray-light': '#d3dce6',
//     }
//   }
// }

// - 프리셋 사용하기
// 모바일 퍼스트
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       'sm': '640px',
//       // => @media (min-width: 640px) { ... }

//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
//       // => @media (min-width: 1536px) { ... }
//     }
//   }
// }

// <img class="w-16 md:w-32 lg:w-48" src="...">
