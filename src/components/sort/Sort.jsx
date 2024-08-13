import './Sort.scss';

const Sort = ({ onHandleSortChange }) => {
  return (
    <div className="button-sort">
      <button onClick={() => onHandleSortChange('금은동')}>금,은,동 순 정렬</button>
      <button onClick={() => onHandleSortChange('총메달')}>총 메달 수 순 정렬</button>
    </div>
  );
};

export default Sort;
