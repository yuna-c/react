import Input from './../input/Input';
import Button from './../button/Button';
import Nodata from './../nodata/Nodata';
import Table from './../table/Table';
import { useState } from 'react';
import './Main.scss';

const Main = () => {
  // default : const countries = { country: country, gold: gold, silver: silver, bronze: bronze }
  // const [country, setCountry] = useState('');
  // const [gold, setGold] = useState(0);
  // const [silver, setSilver] = useState(0);
  // const [bronze, setBronze] = useState(0);

  // 1. 위의 state를 하나로 묶을 객체 state 추가
  const [medalState, setMedalState] = useState({
    country: '',
    gold: 0,
    silver: 0,
    bronze: 0
  });

  const [countries, setCountries] = useState([]);

  // 2. 구조분해 할당을 통한 객체 찢기(name에 값을 주기 위해)
  const { country, gold, silver, bronze } = medalState;

  // const onAddCountry = (e) => setCountry(e.target.value);
  // const onAddGold = (e) => setGold(e.target.value);
  // const onAddSilver = (e) => setSilver(e.target.value);
  // const onAddBronze = (e) => setBronze(e.target.value);

  // 4. 이벤트 전부 공통화해서 onHandleInputChange에 담기 , []에 name을 담아 동적으로 객체 키를 지정하고 input값을 덮어씀
  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setMedalState((originalMedalState) => ({ ...originalMedalState, [name]: value }));
  };

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

    // setCountry('');
    // setGold('');
    // setSilver('');
    // setBronze('');

    // 5. 위의 여러 함수 대신에 setMedalState로 모든 필드를 초기값으로 재설정
    setMedalState({
      country: '',
      gold: 0,
      silver: 0,
      bronze: 0
    });
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
    const deletedCounrty = countries.filter((e) => e.country !== countryToDelete);
    setCountries(deletedCounrty);
  };

  return (
    <main className="main">
      <form className="form-group" onSubmit={onHandleSubmit}>
        {/* 3. medalState에서 인풋에 입력한 value를 받아 onHandleInputChange e.target.name를 통해 어떤 입력 필드가 변경되었는지 확인하고 해당 필드의 값을 업데이트 */}
        <Input
          label="국가명"
          type="text"
          name="country"
          placeholder="국가 입력"
          value={country}
          onChange={onHandleInputChange}
        />
        <Input
          label="금메달"
          type="number"
          placeholder="금메달 개수"
          value={gold}
          name="gold"
          onChange={onHandleInputChange}
        />
        <Input
          label="은메달"
          type="number"
          name="silver"
          placeholder="은메달 개수"
          value={silver}
          onChange={onHandleInputChange}
        />
        <Input
          label="동메달"
          type="number"
          name="bronze"
          placeholder="동메달 개수"
          value={bronze}
          onChange={onHandleInputChange}
        />

        <Button onHandleUpdate={onHandleUpdate} />
      </form>

      {countries.length === 0 ? (
        <Nodata />
      ) : (
        <Table onHandleDelete={onHandleDelete} setCountries={setCountries} countries={countries} country={country} />
      )}
    </main>
  );
};

export default Main;
