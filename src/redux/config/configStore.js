// 🌞 1

// “중앙 state 관리소" 인 Store를 만드는 설정 코드들이 있는 파일
import { combineReducers, createStore } from 'redux';
import counter from '../modules/counter'; // 모듈

// 1. rootReducer 만들기({reducer : 모듈안의 값 ex) todos..})
// counter: counter -> counter,
const rootReducer = combineReducers({ counter });

// 2. store 조합

const store = createStore(rootReducer);

// 3. 만든 store 조합
export default store;

/*
1. createStore()
리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수) 입니다. 
리덕스는 단일 스토어로 모든 상태 트리를 관리한다고 설명해 드렸죠? 
리덕스를 사용할 시 creatorStore를 호출할 일은 한 번밖에 없을 거예요.

2. combineReducers()
리덕스는 action —> dispatch —> reducer 순으로 동작한다고 말씀드렸죠? 
이때 애플리케이션이 복잡해지게 되면 reducer 부분을 여러 개로 나눠야 하는 경우가 발생합니다. 
combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어줍니다.
*/
