import { Link, useParams } from 'react-router-dom';

// - Dynamic route(상세 페이지 구현)

const Contact = () => {
  const params = useParams();
  console.log(`params=>`, params);

  const data = [
    { id: 1, todo: '리액트 배우기' },
    { id: 2, todo: '노드 배우기' },
    { id: 3, todo: '자바스크립트 배우기' },
    { id: 4, todo: '파이어 베이스 배우기' },
    { id: 5, todo: '넥스트 배우기' },
    { id: 6, todo: 'HTTP 프로토콜 배우기' }
  ];

  const work = data.find((work) => work.id === Number(params.id));
  console.log(`targetWork=>`, work);

  return (
    <div className="Contact">
      <h1>
        Contact 페이지 입니다.
        {work ? (
          <p style={{ fontSize: '20px' }}>현재 페이지는 {work.id} 입니다</p>
        ) : (
          <p style={{ fontSize: '20px' }}>해당 ID에 대한 할 일이 없습니다</p>
        )}
        <br />
      </h1>

      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일 : {work.id}</div>
            <Link to={`/Contacts/${work.id}`}>
              <span style={{ cursor: 'pointer' }}>➡️ Go to: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Contact;
