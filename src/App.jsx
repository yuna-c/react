import './styles/App.css'
// import Async from './components/async/Async'
// import AsyncUseEffect from './components/async/AsyncUseEffect'

import PromiseExam from './components/promise/PromiseExam'
import PromiseUseEffect from './components/promise/PromiseUseEffect'
import PromiseData from './components/promise/PromiseData'
import PromiseAllData from './components/promise/PromiseAllData'
import Async from './components/asyncAwait/Async'
import AsyncAWaitTryCatch from './components/asyncAwait/AsyncAWaitTryCatch'
import Http from './components/http/Http'
import Post from './components/http/Post'

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
      {/* <Async />
      <AsyncAWaitTryCatch /> */}

      {/* HTTP */}
      <Http />
      <Post />
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

// 🌞🌞🌞🌞🌞

// - HTTP

// - HTTP란?(+ 프로토콜)
// HTTP(HyperText Transfer Protocol)는 웹 상에서 데이터를 주고받기 위한 프로토콜
// 클라이언트와 서버 간의 요청과 응답을 정의하며, 상태코드와 헤더를 포함한 다양한 요소를 가지고 있음

// HTTP의 개념
// 클라이언트-서버 모델을 기반으로 동작(클라이언트가 요청을 보내면 서버가 응답을 반환하는 방식)

// HTTP의 특징
// - **무상태성**: HTTP는 상태를 유지하지 않아요. 각 요청은 독립적이며, 이전 요청의 정보를 기억하지 않아요. 이를 `무상태(stateless)`라고 해요.
// - **확장성**: HTTP는 다양한 `확장 헤더`를 추가하여 기능을 확장할 수 있어요.
// - **유연성**: HTTP는 `다양한 데이터 형식`을 전송할 수 있어요. 텍스트, 이미지, 비디오 등 여러 형식을 지원해요.

// HTTP 메시지 구조
// HTTP 메시지는 요청(Request)과 응답(Response)
// 요청 메시지: 클라이언트가 서버로 데이터를 요청할 때 사용
// 요청 라인: 메서드(GET, POST, 등), URL, HTTP 버전
// 헤더: 요청의 추가 정보(메타데이터)를 담음 (브라우저 정보, 인증 정보)

// 요청 헤더와 인증 정보
// 왜 요청 헤더에 인증 정보가 들어가나요?
// 웹 브라우저가 서버에 요청을 보낼 때, 서버는 요청을 보낸 사람이 누구인지 알아야 합니다. 이것이 바로 인증(Authentication)
// 인증을 통해 서버는 요청을 보낸 사용자가 누구인지 확인하고, 그 사용자에게 권한이 있는지 판단

// 어떻게 요청 헤더에 인증 정보를 담나요?
// 요청 헤더는 요청에 대한 추가 정보를 담는 곳
// 여기에 인증 정보를 포함하면, 서버가 요청을 받았을 때 그 정보를 확인하여 사용자를 인증

// 요청 예시에서 Access-Token은 유저가 가지고 있는, 로그인했음을 알려주는 키

/* 
GET /protected-resource HTTP/1.1
Host: example.com
Authorization: Bearer <Access-Token>
 */

// 본문 : 선택적, 주로 POST 메서드에서 사용

/*
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
*/

// -  HTTP 상태코드
// 서버가 클라이언트의 요청을 처리한 결과, 상태코드는 세 자리 숫자로 구성되며, 첫 번째 자리에 따라 의미가 달라짐
/*
1xx: 정보
- `100` Continue : 요청의 일부를 서버가 받았으며, 나머지를 계속 보내라는 의미에요.
        
2xx: 성공
- `200` OK : 요청이 성공적으로 처리되었음을 나타내요.
- `201` Created : 요청이 성공적이었으며, 새로운 자원이 생성되었음을 나타내요.

3xx: 리다이렉션**
- `301` Moved Permanently : 요청한 리소스가 영구적으로 새로운 URL로 이동했음을 나타내요.
- `302` Found : 요청한 리소스가 임시로 다른 URL로 이동했음을 나타내요.

4xx: 클라이언트 오류**
- `400` Bad Request : 잘못된 요청임을 나타내요.
- `401` Unauthorized : 인증이 필요함을 나타내요.
- `404` Not Found : 요청한 리소스를 찾을 수 없음을 나타내요.     

5xx: 서버 오류**
- `500` Internal Server Error : 서버가 요청을 처리하는 동안 오류가 발생했음을 나타내요.  
- `502` Bad Gateway : 서버가 게이트웨이 또는 프록시 역할을 하는 서버로부터 유효하지 않은 응답을 받았음을 나타내요.
*/

// - HTTP 메서드 및 Rest API
// 클라이언트가 서버에게 요청의 성격을 알리는 데 사용

/*
GET  : 데이터를 요청할 때, URL에 포함되어 전송되며, 주로 데이터를 조회할 때 사용
     : REST API에서의 사용 -> 특정 리소스를 조회
POST : 데이터를 제출할 때, 요청 데이터가 요청 본문에 포함되어 전송, 주로 데이터를 생성하거나 제출
     : REST API에서의 사용 -> 새로운 리소스를 생성
PUT, PATCH : 데이터를 업데이트할 때, 요청 데이터가 요청 본문에 포함되어 전송,  주로 기존 데이터를 수정할 때 사용
           : REST API에서의 사용 -> 기존 리소스를 수정
DELETE : 데이터를 삭제할 때, 특정 데이터를 삭제
     : REST API에서의 사용 -> 특정 리소스를 삭제 
*/

/*
✔️ 기본 URL : https://api.example.com
✔️ 엔드포인트

| **순번** | **요청내용** | **method** | **url** |
| --- | --- | --- | --- |
| 1 | 게시글을 추가 | POST | /posts |
| 2 | 모든 게시글 조회 | GET | /posts |
| 3 | 특정 게시글 조회 | GET | /posts/:id |
| 4 | 특정 게시글 정보 업데이트 | PUT | /posts/:id |
| 5 | 특정 게시글 정보 일부 수정 | PATCH | /posts/:id |
| 6 | 특정 게시글 정보 삭제 | DELETE | /posts/:id |

✔️ 응답/요청 예시
Content-Type: application/json : 헤더는 HTTP 요청 또는 응답의 본문(body) 데이터 형식을 나타내기 위해 사용
*/

/*
- POST /posts : 새로운 게시물을 생성
URL : /posts
method : POST
Headers : Content-Type: application/json

Request Body :

{
  "title": "string",
  "body": "string",
  "userId": "integer"
}
Response:  
201 Created
{
  "id": "integer",
  "title": "string",
  "body": "string",
  "userId": "integer"
}
400 Bad Request: 요청 본문이 잘못되었을 때


- GET /posts : 모든 게시물을 조회
URL : /posts
method : GET
Headers : 없음

Request :
200 OK
[
  {
    "id": "integer",
    "title": "string",
    "body": "string",
    "userId": "integer"
  },
  ...
]
Response:  
201 Created
{
  "id": "integer",
  "title": "string",
  "body": "string",
  "userId": "integer"
}
400 Bad Request: 요청 본문이 잘못되었을 때


- GET /posts/{id} : 특정 게시물을 조회
URL : /posts/{id}
method : GET
Headers : 없음

Response:
200 OK
[
  {
    "id": "integer",
    "title": "string",
    "body": "string",
    "userId": "integer"
  },
  ...
]
404 Not Found: 해당 ID의 게시물이 존재하지 않을 때


- PUT /posts/{id} : 특정 게시물을 업데이트 (전체 업데이트)
URL : /posts/{id}
method : PUT
Headers : Content-Type: application/json

Request Body:
{
  "title": "string",
  "body": "string",
  "userId": "integer"
}
Response:
200 OK
{
  "id": "integer",
  "title": "string",
  "body": "string",
  "userId": "integer"
}
400 Bad Request: 요청 본문이 잘못되었을 때
404 Not Found: 해당 ID의 게시물이 존재하지 않을 때


- PATCH /posts/{id} : 특정 게시물을 부분적으로 업데이트
URL : /posts/{id}
method : PATCH
Headers : Content-Type: application/json

Request Body (모든 필드가 선택 사항입니다):
{
  "title": "string",
  "body": "string",
  "userId": "integer"
}
Response:
200 OK
{
  "id": "integer",
  "title": "string",
  "body": "string",
  "userId": "integer"
}
400 Bad Request: 요청 본문이 잘못되었을 때
404 Not Found: 해당 ID의 게시물이 존재하지 않을 때


- DELETE /posts/{id} : 특정 게시물을 삭제
URL : /posts/{id}
method : DELETE
Headers : 없음

Response:
200 OK: 성공적으로 삭제되었을 때
404 Not Found: 해당 ID의 게시물이 존재하지 않을 때

*/
