import './Table.scss';

const Table = ({ countryState, onHandleDelete }) => {
  return (
    <div className="table-group">
      <table>
        <caption> 메달 획득 현황 </caption>
        <colgroup>
          <col width="16.66%" />
          <col width="16.66%" />
          <col width="16.66%" />
          <col width="16.66%" />
          <col width="16.66%" />
          <col width="16.66%" />
        </colgroup>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>메달 총 개수</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {countryState.map((data, idx) => (
            <tr key={idx}>
              <td>{data.country}</td>
              <td>{data.gold}</td>
              <td>{data.silver}</td>
              <td>{data.bronze}</td>
              <td>{data.gold + data.silver + data.bronze}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    onHandleDelete(data.country);
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
