import './styles/App.css'
// import Async from './components/async/Async'
// import AsyncUseEffect from './components/async/AsyncUseEffect'

import PromiseExam from './components/promise/PromiseExam'
import PromiseUseEffect from './components/promise/PromiseUseEffect'
import PromiseData from './components/promise/PromiseData'
import PromiseAllData from './components/promise/PromiseAllData'
import Async from './components/asyncAwait/Async'
import AsyncAWaitTryCatch from './components/asyncAwait/AsyncAWaitTryCatch'

const App = () => {
  return (
    <>
      {/* 비동기 */}
      {/* <Async />
      <AsyncUseEffect /> */}

      {/* Promise */}
      {/* <PromiseExam />
      <PromiseUseEffect />
      <PromiseData />
      <PromiseAllData /> */}

      {/* async/await */}
      <Async />
      <AsyncAWaitTryCatch />
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
// Promise 객체는 then, catch, finally 메서드를 통해 이행되거나 거부된 이후의 동작

// 🌞🌞🌞🌞🌞

// - async/await
// async 함수는 항상 Promise를 반환
// await 키워드는 Promise가 이행될 때까지 기다림
// 비동기 코드를 더 동기 코드처럼

// - async/await 사용 이유
// 가독성: async / await 구문을 사용하면 비동기 코드를 동기 코드처럼 작성할 수 있음
// 에러 처리: try...catch 구문을 사용하여 비동기 작업에서 발생하는 오류를 간편하게 처리
// 코드의 간결함: 콜백 지옥이나 체이닝을 피함
