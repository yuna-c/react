import axios from 'axios'

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // 공통 URL
  timeout: 1000 // 타임아웃 시간 설정
  // 공통 헤더 설정 : 커스텀 헤더는 서버에서 허용하지 않으면 CORS 문제가 발생(json-server X)
  // headers: { 'X-Custom-Header': 'foobar' }
})

// 요청 인터셉터 설정 : 요청/응답 가로채서 전처리/후처리 (인증토큰 추가/ 오류 일괄처리 등)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // 로컬 스토리지에서 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}` // 모든 요청에 Authorization 헤더 추가
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
