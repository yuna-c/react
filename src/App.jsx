import Nodata from './components/nodata/Nodata';
import Header from './components/header/Header';
import Button from './components/button/Button';
import Table from './components/table/Table';
import { useState } from 'react';
import './styles/App.scss';

function App() {
  // const countries = { country: country, gold: gold, silver: silver, bronze: bronze }
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);
  // const [storage, setStorage] = useState(() => {
  //   localStorage.setItem('country', JSON.stringify(countries));
  // 빈배열이 스토리지 있으면 컨트리스를 useState 안에 넣고
  // 만약 빈배열이면 세팅값을 먼저 주기 || []
  //   // console.log(countries, localStorage.setItem('country', JSON.stringify(countries)));
  // });

  const onAddCountry = (e) => {
    setCountry(e.target.value);
  };

  const onAddGold = (e) => {
    setGold(e.target.value);
  };

  const onAddSilver = (e) => {
    setSilver(e.target.value);
  };

  const onAddBronze = (e) => {
    setBronze(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const findCountry = countries.find((el) => el.country === country);
    const newCountries = {
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze)
    };

    if (!country) {
      alert('국가명을 입력해 주세요.');
      return;
    } else if (findCountry) {
      alert('이미 등록된 있는 국가입니다.');
      return;
    } else {
      // 1) sort 처리를 먼저( 추가 가능 상태 )
      const sortedArr = [...countries, newCountries].sort((a, b) => {
        if (a.gold === b.gold) return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze);
        else return b.gold - a.gold;
      });
      // 2) setCounties
      setCountries(sortedArr);

      // 3) localStorage
      localStorage.setItem('country', JSON.stringify(sortedArr));
    }

    setCountry('');
    setGold('');
    setSilver('');
    setBronze('');
  };

  const onHandleUpdate = () => {
    const getStorage = JSON.parse(localStorage.getItem('country'));
    console.log(getStorage);
    const findCountry = countries.some((el) => el.country === country);
    const updateCounrty = [...countries].map((el) =>
      // 업데이트 할 때도 숫자화 처리
      el.country === country ? { ...el, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) } : el
    );

    if (!country) {
      alert('국가명을 입력해 주세요.');
      return;
    } else if (!findCountry) {
      alert('등록 되어 있지 않은 국가입니다.');
      return;
    } else {
      return setCountries(updateCounrty);
    }
  };

  // 테이블에 이벤트가 안 먹는 이유는? 테이블 안에..
  // rowClick?
  // client:176 [hmr] Failed to reload /src/components/table/Table.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)
  const onHandleDelete = () => {
    const deletedCounrty = countries.filter((el) => el.country != country);
    setCountries(deletedCounrty);
  };

  return (
    <div id="wrap">
      <Header />
      <main className="main">
        <form className="form-group" onSubmit={onHandleSubmit}>
          <div className="input-field">
            <label>국가명</label>
            <input type="text" placeholder="국가 입력" name="country" value={country} onChange={onAddCountry} />
          </div>
          <div className="input-field">
            <label>금메달</label>
            <input type="number" placeholder="금메달 개수" name="gold" value={gold} onChange={onAddGold} />
          </div>
          <div className="input-field">
            <label>은메달</label>
            <input type="number" placeholder="은메달 개수" name="silver" value={silver} onChange={onAddSilver} />
          </div>
          <div className="input-field">
            <label>동메달</label>
            <input type="number" placeholder="동메달 개수" name="bronze" value={bronze} onChange={onAddBronze} />
          </div>
          <Button onHandleUpdate={onHandleUpdate} />
        </form>

        {countries.length > 0 ? (
          <Table setCountries={setCountries} onHandleDelete={onHandleDelete} countries={countries} country={country} />
        ) : (
          <Nodata />
        )}
      </main>
    </div>
  );
}

export default App;
