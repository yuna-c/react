import axios from 'axios'

// 🔥 axios Custom Instance
// axios.create의 입력값으로 들어가는 객체는 configuration 객체
// https://axios-http.com/docs/req_config 를 참고

const api = axios.create({
  baseURL: 'http://localhost:4000', // 공통 URL
  timeout: 1000 // 타임아웃 시간 설정
  // timeout: 1 // 1ms 요청 실패 상황
  // 공통 헤더 설정 : 커스텀 헤더는 서버에서 허용하지 않으면 CORS 문제가 발생(json-server X)
  // headers: { 'X-Custom-Header': 'foobar' }
})

// 🔥 Axios Interceptor :
// 요청 / 응답 가로채서 전처리 / 후처리(인증토큰 추가 / 오류 일괄처리 등)
// 요청(request)이 전송되기 전(또는 요청을 보내기 전, 또는 요청이 출발하기 전)
// 응답(response)의 `then`(성공) 또는 `catch`(실패)가 처리되기 전

// - 요청 헤더 추가
// - 인증 관리
// - 로그 관련 로직 삽입
// - 에러 핸들링
// - 문제 생겼을 때 담당자에게 카카오톡 알림톡을 준다던가

// 🔥 더 적용할 수 있는 부분
// - 요청 시, `content-type` 적용
// - 토큰 등 인증 관련 로직 적용
// - 서버 응답 코드에 대한 오류 처리
// - 통신 시작 및 종료에 대한 전역 상태 관리로 스피너, 프로그레스 바 구현

// 요청 인터셉터 .use((config)=>{}. (error)=>{}) 인자1, 인자2
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // 로컬 스토리지에서 토큰 가져오기

    // 토큰이 있으면 Authorization 헤더에 추가
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // 요청을 보내기 전 수행
    console.log('인터셉트 요청 성공!')

    return config
  },
  (error) => {
    // 오류 요청을 보내기 전 수행
    console.log('인터셉트 요청 오류!')
    return Promise.reject(error) // 오류 발생 시 요청 거부
  }
)

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    // 응답 데이터를 가공하거나 처리
    console.log('인터셉트 응답 성공!', response)

    return response // 가공된 데이터를 반환하거나 그대로 반환
  },
  (error) => {
    // 응답 오류 처리
    console.error('인터셉트 응답 오류!', error)

    // 🔥 에러 핸들링 통합
    if (error.response) {
      // 서버가 4xx, 5xx 응답을 반환했을 때
      console.error('서버 오류:', error.response.data)
      console.error('상태 코드:', error.response.status)
      console.error('헤더:', error.response.headers)
    } else if (error.request) {
      // 요청이 전송되었으나 응답을 받지 못한 경우
      console.error('응답 없음:', error.request)
    } else {
      // 요청 설정 중에 발생한 기타 오류
      console.error('요청 오류:', error.message)
    }

    return Promise.reject(error) // 오류 발생 시 응답 거부
  }
)

export default api
