# 프로젝트 주제

2024 파리 올림픽에서 각 나라가 획득한 메달 수를 추적하는 Olympic Medal Tracker 만들기

- [Olympic Medal Tracker](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)

# 폴더 구조

```
@ Olympic                                              //
├─ public                                              //
│  └─ olympics.png                                     //
├─ src                                                 //
│  ├─ App.jsx                                          //
│  ├─ components                                       //
│  │  ├─ button                                        //
│  │  │  ├─ Button.jsx                                 //
│  │  │  └─ Button.scss                                //
│  │  ├─ header                                        //
│  │  │  ├─ Header.jsx                                 //
│  │  │  └─ Header.scss                                //
│  │  ├─ input                                         //
│  │  │  ├─ Input.jsx                                  //
│  │  │  └─ Input.scss                                 //
│  │  ├─ main                                          //
│  │  │  ├─ Main.jsx                                   //
│  │  │  └─ Main.scss                                  //
│  │  ├─ nodata                                        //
│  │  │  ├─ Nodata.jsx                                 //
│  │  │  └─ Nodata.scss                                //
│  │  └─ table                                         //
│  │     ├─ Table.jsx                                  //
│  │     └─ Table.scss                                 //
│  ├─ index.jsx                                        //
│  └─ styles                                           //
│     ├─ App.scss                                      //
│     ├─ _reset.scss                                   //
│     └─ _variables.scss                               //
├─ vite.config.js                                      //
├─ eslint.config.js                                    //
├─ package-lock.json                                   //
├─ package.json                                        //
├─ yarn.lock                                           //
├─ .gitignore                                          //
├─ .prettierrc                                         //
└─ index.html                                          //
```

# 필수 기능

- [x] 시맨틱 태그 활용
- [x] 레이아웃 최대 넓이는 1200px, 최소 넓이는 800px 로 제한, 가운데 정렬
- [x] 나라 이름, 금은동 메달 수를 입력할 수 있는 제출 폼 UI 구현
- [x] 폼 제출 후 input 필드는 다시 빈 값으로 바뀌도록 구성
- [x] 등록 : 새로운 나라와 그 나라가 획득한 메달 수를 추가
- [x] 조회 : 나라별 메달 집계 리스트 보여주기
- [x] 수정 : 기존에 추가된 나라의 메달 수를 수정하기
- [x] 삭제 : 나라 정보 삭제하기
- [x] 정렬 : 메달 집계는 금메달 수를 기준으로 내림차순 정렬하기

# 도전 기능

- [x] 나라 이름 입력했을 때 이미 등록된 국가라면 alert 메시지 띄우기
- [x] 업데이트하는 국가가 등록되지 않은 경우 alert 메시지
- [ ] 메달 총 개수 보여주고, 메달 총 개수대로 정렬
- [ ] 메달 정보 로컬스토리지에 저장

# 문제

1. **JSX 문법**이란 무엇일까요?

JSX : Javascript Syntax eXtension
자바스크립트의 확장 문법, React에서 UI를 표현하기 위해 사용

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 메달 정보와 같은 **애플리케이션의 상태를 관리하기(추가, 변경, 삭제) 위해 리액트의 어떤 기능을 사용하셨나요**?

useState 함수를 사용

3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?
   props를 통해서 컴포넌트 상태 값들을 공유

4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**
   보기에 편했다.
