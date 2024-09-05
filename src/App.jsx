import './styles/App.css'
import Async from './components/Async'
import AsyncUseEffect from './components/AsyncUseEffect'

const App = () => {
  return (
    <>
      <Async />
      <AsyncUseEffect />
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
