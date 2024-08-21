# Redux Toolkit

- yarn add react-redux @reduxjs/toolkit

# Redux Dev Tools

- 개발자 도구 -> Redux
- [Redux DevTools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)

# Flux 패턴

애플리케이션 아키텍처 -> 단방향 흐름을 강조

1. **Dispatcher**: 애플리케이션 내 모든 데이터 흐름을 관리하는 중앙 허브 역할을 합니다. 액션들이 발생하면 디스패처를 통해 스토어로 전달됩니다.
2. **Stores**: 애플리케이션의 상태(데이터)와 로직을 보유합니다. 스토어는 디스패처를 통해 전달된 액션에 반응하여 상태를 변경하고, 변경 사항을 뷰에 알립니다.
3. **Actions**: 상태 변화를 일으킬 때 사용하는 간단한 객체입니다. 사용자 인터페이스에서 발생한 사용자의 행동을 액션으로 표현하고, 이를 디스패처를 통해 스토어로 전달합니다.
4. **Views (React Components)**: 사용자 인터페이스를 구성하는 React 컴포넌트들입니다. 스토어에서 상태가 변하면, 뷰는 이를 반영하여 사용자 인터페이스를 업데이트합니다.

# Duck vs Flux

공통점 : 애플리케이션의 상태 관리와 데이터 흐름
Ducks : Redux 코드의 구조를 단순화
Flux : 애플리케이션의 데이터 흐름을 체계화

# 참고 자료

- [만화로 보는 Flux](https://bestalign.github.io/translation/cartoon-guide-to-flux/)
- [Flux와 redux의 관계](https://taegon.kim/archives/5288)

# Git 사전 설치

- [Git](https://nodejs.org/en/)

# Node 사전 설치

- [Node(LTS)](https://nodejs.org/en/)
- [node 설치 확인하기] : node -v, npm -v

# Yarn 사전 설치

- npm i -g yarn
- yarn -v
- yarn add [설치할 패키지 이름]

# Vite로 리액트 프로젝트 셋업(CMD)

- cd Desktop
- yarn create vite folder --template react
- cd folder

# 접근 및 실행(my-react-app)

- cd my-react-app
- code .
- yarn
- [열기] yarn dev
