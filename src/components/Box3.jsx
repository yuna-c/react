import React from 'react';

const boxStyle = {
  width: '100px',
  height: '100px',
  backgroundColor: '#c491be',
  color: 'white',

  // 가운데 정렬 3종세트
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Box3 = () => {
  console.log('Box3가 렌더링되었습니다.');
  return <div style={boxStyle}>Box3</div>;
};

export default React.memo(Box3);
