// React 라이브러리에서 useState와 useEffect 훅을 가져옵니다.
// useState는 상태 관리를 위해, 기억하죠?
// useEffect는 컴포넌트의 생명주기 동안 특정 작업을 수행하기 위해!
import { useState, useEffect } from 'react'

function PromiseUseEffect() {
  // state 선언 및 초기화
  // setMessage : 상태 업데이트 함수
  // useState는 상태 변수와 그 변수를 업데이트하는 함수를 반환합니다.
  // 즉, 좌측의 [state, setState] 구조는 useState의 결과물을 '구조분해할당'한 것이죠!
  const [message, setMessage] = useState('타이머 시작')

  // useEffect 훅을 사용하여 컴포넌트가 마운트되었을 때 실행될 효과를 정의
  // 빈 배열 []을 두 번째 인자로 넘겨주어, 이 효과가 컴포넌트가 처음 렌더링 된 후 한 번만 실행
  useEffect(() => {
    // delay 함수 정의
    // (1) delay 함수는 Promise 객체를 새로(new) 만들어 반환합니다.
    //   ** 여기서 Promise는 객체를 생성하기 위한 생성자입니다.
    // (2) 만들어진 promise 객체는 주어진 밀리초(ms)만큼 동작을 지연시킵니다.

    // (1) delay함수는 주어진 밀리초(ms)만큼 지연시키는 Promise를 반환합니다.
    // (2) setTimeout을 사용하여 지정된 시간(ms) 후에 resolve를 호출합니다.
    // (3) 따라서, 지정된 시간(ms) 후에 pending -> fulfilled로 상태가 바뀌어요.
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    // (1) delay 함수를 호출하여 2000밀리초(2초) 동안 지연시킵니다.
    // (2) delay 함수가 반환하는 Promise가 완료되면 then 메서드가 호출되고, 이 메서드 안의 콜백 함수가 실행됩니다.
    // (3) 이 콜백 함수는 setMessage를 호출하여 message 상태를 "2초 후 메시지 변경"으로 업데이트합니다.
    delay(2000).then(() => setMessage('2초 후 메시지 변경'))
  }, [])

  // 초기 상태는 "타이머 시작"이며, 2초 후에는 "2초 후 메시지 변경"으로 업데이트됩니다.
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default PromiseUseEffect
