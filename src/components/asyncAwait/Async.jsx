export default function Async() {
  // async 키워드로 정의된 함수는 항상 Promise를 반환
  // 함수 내부에서 명시적으로 return 문으로 값을 반환하면 자동으로 Promise.resolve()를 통해 감싸져서 반환
  // await 키워드는 Promise가 이행될 때까지 기다리고, 이행된 Promise의 결과를 반환

  const testFunc = async () => {
    return 4
  }

  const value = testFunc()
  console.log('async/await text => ', value)

  return <div className="Async">Async</div>
}
