export default function ExamPromise() {
  // const myPromise = new Promise((resolve, reject) => {
  //   // 비동기 작업을 수행합니다.
  //   if (/* 작업이 성공적으로 완료되면 */) {
  //     resolve("성공 메시지");
  //   } else {
  //     reject("실패 메시지");
  //   }
  // });
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // 작업의 성공 여부를 나타내는 변수
      // 여기를 true <-> false 변경해가며 테스트해보세요!
      const success = false

      if (success) {
        // resolve 함수는 Promise 객체의 상태를 이행(fulfilled) 상태로 변경해요.
        // resolve 함수 자체는 반환값이 없어요.
        // 다만, resolve 함수가 호출되면 그 값이 then 메서드의 callback 함수로 전달돼요.
        resolve('작업이 성공적으로 완료되었습니다!')
      } else {
        // 마찬가지 원리로, reject 함수가 호출되면 그 값이 catch 메서드의 callback 함수로 전달돼요.
        reject('작업이 실패했습니다.')
      }
    }, 2000) // 2초 후에 작업이 완료
  })

  myPromise
    .then((result) => {
      console.log(result) // "작업이 성공적으로 완료되었습니다!" 출력
    })
    .catch((error) => {
      console.log(error) // "작업이 실패했습니다." 출력
    })
  return <div className="Promise">Promise</div>
}
