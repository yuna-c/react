export default function Async() {
  function sendTextMessage(message, callback) {
    // 메시지를 보내는 비동기 작업을 가정해요.
    setTimeout(() => {
      console.log(
        '%c문자 메시지 전송 완료: %c' + message,
        'color: #f0637b;font-weight: bold;',
        'color: #ee90a0; font-weight: bold;'
      )
      callback() // 응답이 도착하면 콜백 함수 호출
    }, 2000) // 2초 후에 메시지 전송이 완료된다고 가정
  }

  console.log('메시지 보내기 시작')
  sendTextMessage('안녕, 잘 지내?', function () {
    console.log('메시지 전송 후 후속 작업 수행')
  })
  console.log('다른 작업 수행')

  // 출력 결과:
  // 메시지 보내기 시작
  // 다른 작업 수행
  // 문자 메시지 전송 완료: 안녕, 잘 지내?
  // 메시지 전송 후 후속 작업 수행
  return <div className="Async">Async</div>
}

// 🌞🌞🌞🌞🌞
// console.log('%c이 텍스트는 빨간색 배경에 흰색 글자입니다.', 'color: white; background-color: red;')
// console.log('%c이 텍스트는 큰 글자 크기에 파란색입니다.', 'color: blue; font-size: 20px;')
// console.log('%c이 텍스트는 굵게 표시된 녹색입니다.', 'color: green; font-weight: bold;')
// console.log('%c이 텍스트는 빨간색입니다.', 'color: red;')
// console.log('%c이 텍스트는 파란색입니다.', 'color: blue;')
// console.log('%c이 텍스트는 녹색입니다.', 'color: green;')
