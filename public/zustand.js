// 🔥 Zustand의 등장배경

// - 상태관리의 중요성
// 상태(state) : 데이터와 UI의 현재 상태
// 상태변경 : UI도 업데이트

// - Zustand의 필요성
// 상태관리 본연의 기능에 집중하여 위와 같은 복잡성을 줄이고, 보다 간단하고 직관적인 상태관리 기능을 제공
// 단순화된 Flux 패턴을 사용하는 작고(small) 빠르고(fast) 확장가능한(scalable) 상태관리 솔루션이며, Hooks에 기반으로하는 간편한 API가 존재

// 🔥 Zustand의 주요 개념
// - 간결함
// 매우 간단한 API를 제공하기 때문에, 학습 곡선이 완만
// 매우 적은 설정 코드 및 적용 코드를 이용하여 상태관리 기능을 구현

// - 성능
// `불필요한 리렌더링을 방지`하는 등, `성능 최적화`가 잘 되어 있음
// `Zustand`는 상태가 변경될 때, 해당 상태를 `구독(subscribe)`하고 있는 컴포넌트만 리렌더링
// 구독 : 상태 변경 감지 , 반응하는 컴포넌트만 업데이트 = 성능 최적화, 성능저하 방지

// - React와의 통합
// React의 훅(Hook)과 완벽하게 통합
// useState, useEffect와 같은 기본 훅을 사용하는 것처럼 간편하게 사용

// 아래에서 다뤄볼 코드 중 일부
// const bears = useBearsStore((state) => state.bears);

// - 이런 특징 때문인지, 엄청나게 높은 점유율을 확보

// 🔥 설치 및 기본 사용법
// 설치 : yarn add zustand
// 기본 사용법

// src > zustand > bearsStore.js
// import { create } from "zustand";

// const useBearsStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }));

// export default useBearsStore;

// src > App.jsx
// import "./App.css";
// import useBearsStore from "./zustand/bearsStore";

// function App() {
//   const bears = useBearsStore((state) => state.bears);
//   const increasePopulation = useBearsStore((state) => state.increasePopulation);
//   return (
//     <div>
//       <h1>{bears} around here ...</h1>
//       <button onClick={increasePopulation}>one up</button>
//     </div>
//   );
// }
// export default App;

// 🔥 Zustand와 Redux Toolkit 비교

// - 설정 및 사용법 비교

// Zustand : 상태를 정의하고 사용하는 과정이 직관적
// import { create } from 'zustand'

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 }))
// }))

// Redux Toolkit : 구조화된 방법을 제공하지만, 설정이 다소 복잡, 보일러 플레이트가 너-무 많다보니 상태 하나를 관리하고자 해도 추가/설정

// import { configureStore, createSlice } from '@reduxjs/toolkit'

// const slice = createSlice({
//   name: 'counter',
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     }
//   }
// })

// const store = configureStore({ reducer: slice.reducer })

// 🔥 장단점 비교(정리)

// Zustand
// 장점: 간단하고 빠르며, 설정이 매우 쉬움
// 단점: 상태가 커지면 관리가 어려움

// Redux Toolkit
// 장점: 구조화된 방법을 통해 대규모 애플리케이션에서도 관리가 용이
// 단점: 설정이 복잡하고, 학습 곡선이 가파름
