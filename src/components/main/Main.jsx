import Input from './../input/Input';
import Button from './../button/Button';
import Sort from '../sort/Sort';
import Nodata from './../nodata/Nodata';
import Table from './../table/Table';
import { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [countryState, setCountryState] = useState([]);
  const [medalState, setMedalState] = useState({
    country: '',
    gold: 0,
    silver: 0,
    bronze: 0
  });
  const [sortState, setSortState] = useState('금은동');

  const { country, gold, silver, bronze } = medalState;
  const findCountryState = countryState.find((e) => e.country === country);

  const onHandleInputChange = (e) => {
    const { name, value } = e.target;
    setMedalState((originalMedalState) => ({ ...originalMedalState, [name]: value }));
  };

  const onHandleSort = (countryState) => {
    if (sortState === '금은동') {
      return countryState.sort((a, b) => {
        if (a.gold === b.gold) return b.silver === a.silver ? b.bronze - a.bronze : b.silver - a.silver;
        return b.gold - a.gold;
      });
    }

    if (sortState === '총메달') {
      return countryState.sort((a, b) => {
        const totalMedalA = a.gold + a.silver + a.bronze;
        const totalMedalB = b.gold + b.silver + b.bronze;
        return totalMedalB - totalMedalA;
      });
    }
    return countryState;
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (!country) {
      alert('국가명을 입력해 주세요.');
      return;
    }

    if (findCountryState) {
      alert('이미 등록된 있는 국가입니다.');
      return;
    }

    const newcountryState = {
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze)
    };

    const updateCountrySate = [...countryState, newcountryState];
    setCountryState(onHandleSort(updateCountrySate, sortState));

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

    if (!findCountryState) {
      alert('등록 되어 있지 않은 국가입니다.');
      return;
    }

    const updateCounrtyState = countryState.map((e) =>
      e.country === country ? { ...e, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) } : e
    );

    setCountryState(onHandleSort(updateCounrtyState, sortState));
  };

  const onHandleDelete = (countryToDelete) => {
    const deletedCounrty = countryState.filter((e) => e.country !== countryToDelete);
    setCountryState(deletedCounrty, sortState);
  };

  // 정렬 상태 업데이트 후 countryState 정렬
  const onHandleSortChange = (newSortState) => {
    setSortState(newSortState);
    setCountryState(onHandleSort([...countryState], newSortState)); // 정렬 상태 업데이트 후 countryState 정렬
  };

  return (
    <main className="main">
      <form className="form-group" onSubmit={onHandleSubmit}>
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

      <Sort onHandleSortChange={onHandleSortChange} />

      {countryState.length === 0 ? <Nodata /> : <Table onHandleDelete={onHandleDelete} countryState={countryState} />}
    </main>
  );
};

export default Main;
