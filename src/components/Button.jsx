import { useState } from 'react';
import styled from 'styled-components';

// TODO: button이 눌렸을 때, gray 처리
// TODO: 취소 버튼이 눌리면 gray 처리된 것이 없도록
const Button = () => {
  const 초기값 = [
    {
      id: 1,
      name: '홍길동',
      isFemale: false,
      score: 30
    },
    {
      id: 2,
      name: '홍길순',
      isFemale: true,
      score: 60
    },
    {
      id: 3,
      name: '김르탄',
      isFemale: true,
      score: 80
    }
  ];

  const [people, setPeople] = useState(초기값);
  const [activeId, setActiveId] = useState(0);
  return (
    <div className="Button">
      <div>
        {people.map(function (person) {
          return (
            <StyledButton
              key={person.id}
              $color={person}
              $activeId={activeId}
              onClick={() => {
                // alert(person.id);
                setActiveId(person.id);
              }}
            >
              {person.name}
            </StyledButton>
          );
        })}
      </div>
      <button
        style={{
          marginTop: '20px',
          width: '100%',
          backgroundColor: 'aquamarine'
        }}
        onClick={() => {
          setActiveId(0);
        }}
      >
        취소
      </button>
    </div>
  );
};
export default Button;
