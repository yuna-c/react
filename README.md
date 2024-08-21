# Redux

- yarn add redux react-redux
- yarn add redux, yarn add react-redux 축약

# Redux 흐름

1. View 에서 액션이 일어난다.
2. dispatch 에서 action이 일어나게 된다.
3. action에 의한 reducer 함수가 실행되기 전에 middleware가 작동한다.
4. middleware 에서 명령내린 일을 수행하고 난뒤, reducer 함수를 실행한다. (3, 4번은 아직 몰라도 됩니다!)
5. reducer 의 실행결과 store에 새로운 값을 저장한다.
6. store의 state에 subscribe 하고 있던 UI에 변경된 값을 준다.

- [@리덕스 흐름 이해하기](https://velog.io/@annahyr/%EB%A6%AC%EB%8D%95%EC%8A%A4-%ED%9D%90%EB%A6%84-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

# Action Creator 문서

- [@action creator](https://redux.js.org/api/bindactioncreators/#todoactioncreatorsjs)

# Ducks 문서

- [@ducks-modular-redux](https://github.com/erikras/ducks-modular-redux)

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
