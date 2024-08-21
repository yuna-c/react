const generateUUID = () => {
  // 랜덤한 값을 기반으로 UUID v4를 생성
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0; // 0-15 사이의 랜덤 숫자
    const v = c === 'x' ? r : (r & 0x3) | 0x8; // v의 경우 8, 9, a, b 중 하나
    return v.toString(16);
  });
};

export default generateUUID;
