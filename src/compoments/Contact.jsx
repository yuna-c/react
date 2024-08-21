import { useParams } from 'react-router-dom';

const data = [
  { id: 1, todo: '리액트 배우기' },
  { id: 2, todo: '노드 배우기' },
  { id: 3, todo: '자바스크립트 배우기' },
  { id: 4, todo: '파이어 베이스 배우기' },
  { id: 5, todo: '넥스트 배우기' },
  { id: 6, todo: 'HTTP 프로토콜 배우기' }
];

const Contact = () => {
  const param = useParams();

  const work = data.find((work) => work.id === parseInt(param.id));
  //const work = data.find((work) => work.id === Number(param.id));
  console.log(`targetWork=>`, work);

  return (
    <div key={work.id} className="Contact">
      <h3>현재 페이지는 {work.id} 입니다</h3>
      {work.todo}
    </div>
  );
};
export default Contact;
