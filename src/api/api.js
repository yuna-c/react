import axios from 'axios'

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // 공통 URL
  timeout: 1000 // 타임아웃 시간 설정
  // 공통 헤더 설정 : 커스텀 헤더는 서버에서 허용하지 않으면 CORS 문제가 발생(json-server X)
  // headers: { 'X-Custom-Header': 'foobar' }
})

export default axiosInstance
