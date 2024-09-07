// https://moneyfulpublicpolicy.co.kr

// 🔥 회원가입
// 아이디, 비밀번호, 닉네임으로 DB에 본인의 회원정보를 저장

// - Request ⬇️
//   Method → `POST`
//   URL PATH →  `/register`

// Body ⬇️
// {
//  "id": "유저 아이디",
// 	"password": "유저 비밀번호",
// 	"nickname": "유저 닉네임"
// }

// Response ⬇️
// {
//  "message": "회원가입 완료",
//  "success": true
// }

/*-------------------------------------------------------------------------------------------*/

// 🔥 로그인
// 아이디와 비밀번호가 DB에 있는 회원정보와 일치하면 accessToken, userId, avatar, nickname 총 4가지 유저정보를 응답

// - Request ⬇️
//   Method → `POST`
//   URL PATH →  `/login`

//   Body ⬇️
// {
//   "id":"유저 아이디",
//   "password": "유저 비밀번호"
// }

// Query string ⬇️ (선택)
// /login?expiresIn=10m : 유효시간을 10분인 accessToken 요청

// Response ⬇️
// {
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiY2FiYyIsImlhdCI6MTcwMDgxNDQyMCwiZXhwIjoxNzAwODE4MDIwfQ.8hWOHHEzDPzumnqCU7jyoi3zFhr-HNZvC7_pzBfOeuU",
//   "userId": "유저 아이디",
//   "success": true,
//   "avatar": "프로필 이미지",
//   "nickname": "유저 닉네임"
// }

/*-------------------------------------------------------------------------------------------*/

// 🔥 회원정보 확인

// Request ⬇️
// Method → `PATCH`
// URL PATH →  `/profile`

// Body ⬇️
// {
//   "nickname": "변경테스트유저"
// }

// Response ⬇️
// {
//   "nickname": "변경테스트유저",
//   "message": "프로필이 업데이트되었습니다.",
//   "success": true
// }

/*-------------------------------------------------------------------------------------------*/

// 🔥 회원정보 확인
// accessToken이 유효한 경우, 비밀번호를 제외한 본인의 회원정보를 응답

// authorization 속성 정의
// const response = await axios.get(`${BASE_URL}/user`, {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${accessToken}`,
//   },
// });

// Request ⬇️
// Method → `GET`
// URL PATH →  `/user`

// Header ⬇️
// {
// 	"Authorization": "Bearer AccessToken"
// }

// Response ⬇️
// {
//   "id": "사용자 아이디",
//   "nickname": "사용자 닉네임",
//   "avatar": null,
//   "success": true
// }

/*-------------------------------------------------------------------------------------------*/

// 🔥 프로필 변경
// accessToken이 유효한 경우, 프로필 이미지 또는 닉네임을 FormData을 통해 요청하면 변경 완료된 이미지 URL과 닉네임을 응답

// 이미지파일을 FormData에 담는 방법

// const formData = new FormData();
// // avatar와 nickname 중 하나 또는 모두 변경 가능
// formData.append("avatar", imgFile);
// formData.append("nickname", nickname);

// // 요청 시 Content-Type에 유의
// const response = await axios.patch(`${BASE_URL}/profile`, formData, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//     Authorization: `Bearer ${accessToken}`,
//   },
// });

// Request ⬇️
// Method → `PATCH`
// URL PATH →  `/profile`

// Header ⬇️
// {
// 	"Authorization": "Bearer AccessToken"
// }

// Body ⬇️
// FORM
// {
// 	"avatar": [이미지파일],
// 	"nickname": "변경할 닉네임"
// }

// Response ⬇️
// {
//   "avatar": "변경된 이미지 URL",
//   "nickname": "변경된 닉네임",
//   "message": "프로필이 업데이트되었습니다.",
//   "success": true
// }
