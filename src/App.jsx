import './styles/App.scss';

const App = () => {
	return <></>;
};
export default App;

/*
1. 브라우저가 렌더링 되는 원리
1-1. 가상돔(Virtual DOM)

1-2. DOM
페이지 : 문서(document)
페이지를 이루는 컴포넌트 : 엘리먼트(element)
tree 형태(= DOM TREE)
트리의 요소 하나하나 : 노드
API : HTML 요소에 접근해서 수정할 수 있는 함수

1-3. DOM 사용 예시

// id가 demo인 녀석을 찾아, 'Hello World!'를 대입해줘.
document.getElementById("demo").innerHTML = "Hello World!";

// p 태그들을 모두 가져와서 element 변수에 저장해줘
const element = document.getElementsByTagName("p");

// 클래스 이름이 intro인 모든 요소를 가져와서 x 변수에 저장해줘
const x = document.getElementsByClassName("intro");


2. 가상DOM(Virtual DOM)

2-1. 가상DOM
가상DOM을 이용해서 실제DOM을 변경 : 복사본 형태
객체(object) 형태로 메모리에 저장
실제 DOM을 조작하는 것 보다 훨씬 더 빠르게 조작

2-2. DOM 조작 과정
* 만일 인스타그램의 좋아요 버튼을 누른다면 빨간색 하트에 해당되는 엘리먼트 DOM 요소가 갱신

**[STEP 1]**
이 과정에서 리액트는 항상 **`2가지 버전의 가상DOM`**을 가지고 있음

1. 화면이 갱신되기 **전** 구조가 담겨있는 **가상DOM 객체**
2. 화면 갱신 **후** 보여야 할 **가상 DOM 객체**

리액트는 **`state`**가 변경돼야만 리렌더링이 되죠. 그 때, 바로 2번에 해당되는 **가상 DOM을 만듬**

**[STEP 2 : diffing]**
**state**가 변경되면 2번에서 생성된 가상돔과 1번에서 이미 갖고있었던 **가상돔을 비교**해서 어느 부분(엘리먼트)에서 변화가 일어났는지를 상당히 빠르게 파악함

**[STEP 3 : 재조정(reconciliation)]**
파악이 다 끝나면, 변경이 일어난 **그 부분만** 실제 `DOM에 적용`시킴. 적용시킬 때는, 한건 한건 적용시키는 것이 아니라, 변경사항을 모두 모아 한 번만 적용을 시킴**(Batch Update 🔥)**

2-3. Batch Update
state를 batch 방법으로 update 한다는 것은 변경된 모든 엘리먼트를 한꺼번에 반영할 수 있는 방법

3. 브라우저 렌더링(페인팅)
3-1. 렌더링 순서
**가상 DOM 생성**: React는 컴포넌트의 렌더 함수를 실행하여 가상 DOM을 새로 생성합니다.
**차이 비교 (Diffing)**: 새로운 가상 DOM과 이전 가상 DOM을 비교하여 실제 DOM을 업데이트해야 할 부분을 찾습니다.
**배치 업데이트 (Reconciliation)**: 변경된 부분만을 효율적으로 실제 DOM에 반영합니다.

3-2. 브라우저 렌더링(페인팅)
1. **스타일 계산**: HTML과 CSS를 분석하여 각 요소의 스타일을 계산
2. **레이아웃**: 각 요소의 위치와 크기를 계산
3. **페인팅**: 레이아웃 단계에서 계산된 정보를 바탕으로 요소를 화면에 그림
*/
