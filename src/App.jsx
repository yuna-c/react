import './styles/App.css'
// import Async from './components/async/Async'
// import AsyncUseEffect from './components/async/AsyncUseEffect'

import PromiseExam from './components/promise/PromiseExam'
import PromiseUseEffect from './components/promise/PromiseUseEffect'
import PromiseData from './components/promise/PromiseData'

const App = () => {
  return (
    <>
      {/* 비동기 */}
      {/* <Async />
      <AsyncUseEffect /> */}

      {/* Promise */}
      <PromiseExam />
      <PromiseUseEffect />
      <PromiseData />
    </>
  )
}

export default App

// 🌞🌞🌞🌞🌞

// - 동기 처리(Synchronous Processing)
// 요청과 그에 따른 응답이 순차적으로 일어나는 방식
// ‘일의 순서’가 중요한 경우 동기 처리

// - 비동기 처리(Asynchronous Processing)
// 요청과 그에 따른 응답이 비순차적으로 일어나는 방식
// ‘일의 순서’가 중요하지 않은 경우, 효율적인 일 처리를 위해 비동기 처리

// 🌞🌞🌞🌞🌞

// - Promise
// Promise는 자바스크립트에서 비동기 작업의 완료 또는 실패를 처리하기 위해 사용되는 개념(콜백)
// Promise 객체를 생성하기 위해 Promise 생성자를 사용

// - Promise 없을 때
// 유지보수하기 어려워
// 흐름을 추적하기 힘들
// 코드가 복잡해져

// - Promise의 상태
// 대기(Pending) : 이행되거나 거부되지 않은 초기 상태(resolve나 reject로 인해 다른 상태로 변경되기 전까지의 상태)
// 이행(Fulfilled) : 비동기 작업이 성공적으로 완료된 상태( resolve로 인해 pending 상태에서 fulfilled 상태로 변경)
// 거부(Rejected) : 비동기 작업이 실패한 상태, reject로 인해 pending 상태에서 rejected 상태로 변경
// Promise 객체는 then, catch, finally 메서드를 통해 이행되거나 거부된 이후의 동작을 정
