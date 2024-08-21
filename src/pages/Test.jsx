import { useParams } from 'react-router-dom';

const Test = () => {
  const params = useParams();
  console.log(params);

  return <div className="Test">Test</div>;
};
export default Test;
