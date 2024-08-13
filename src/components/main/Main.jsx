import Button from './../button/Button';
import Nodata from './../nodata/Nodata';
import Table from './../table/Table';
import { useState } from 'react';
import './Main.scss';

const Main = () => {
  // const countries = { country: country, gold: gold, silver: silver, bronze: bronze }
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countries, setCountries] = useState([]);

  const onAddCountry = (e) => setCountry(e.target.value);
  const onAddGold = (e) => setGold(e.target.value);
  const onAddSilver = (e) => setSilver(e.target.value);
  const onAddBronze = (e) => setBronze(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (!country) {
      alert('국가명을 입력해 주세요.');
      return;
    }

    const findCountry = countries.find((e) => e.country === country);

    if (findCountry) {
      alert('이미 등록된 있는 국가입니다.');
      return;
    }
    const newCountries = {
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze)
    };

    const sortedArr = [...countries, newCountries].sort((a, b) => {
      if (a.gold === b.gold) return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze);
      else return b.gold - a.gold;
    });
    setCountries(sortedArr);
    localStorage.setItem('country', JSON.stringify(sortedArr));

    setCountry('');
    setGold('');
    setSilver('');
    setBronze('');
  };

  const onHandleUpdate = () => {
    if (!country) {
      alert('국가명을 입력해 주세요.');
      return;
    }

    const findCountry = countries.find((e) => e.country === country);

    if (!findCountry) {
      alert('등록 되어 있지 않은 국가입니다.');
      return;
    }

    const updateCounrty = countries.map((e) =>
      e.country === country ? { ...e, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) } : e
    );

    return setCountries(updateCounrty);
  };

  const onHandleDelete = (countryToDelete) => {
    // alert(`${countryToDelete} 항목을 삭제하겠습니다.`);
    const deletedCounrty = countries.filter((e) => e.country !== countryToDelete);
    setCountries(deletedCounrty);
  };

  return (
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
        {/* 업데이트를 눌렀을 때 어떻게 동작해야하지? 
            (1) input창 중에 나라이름에 매칭된 state 정보(name)
            (2) state에 있는 나라이름(ex대한민국)으로 현존하는 countries 배열에서 찾아 by find => 내가 수정하려고 하는 국가 countries.find~
            (3) map을 사용(변경대상의 배열을 새롭게 만들고 싶어) 
            (3)-1. map이 하나하나 순회를 도는데, targetCoutnry의 이름과 일치하면 => gold,silver, bronze에 맞게 수정
            (3)-2. map이 하나하나 순회를 도는데, targetCoutnry의 이름과 일치하지 않으면 그대로 내보내(return)
            const newCountrise = countries.map~
            (4) setCountries  setCountise(~~)
            (5) input에 연결되어있는 state들을 초기화?
        */}
      </form>
      {countries.length > 0 ? (
        <Table onHandleDelete={onHandleDelete} setCountries={setCountries} countries={countries} country={country} />
      ) : (
        <Nodata />
      )}
    </main>
  );
};
export default Main;
