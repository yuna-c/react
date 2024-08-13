import Input from './../input/Input';
import Button from './../button/Button';
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

  const { country, gold, silver, bronze } = medalState;

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

    const findCountry = countryState.find((e) => e.country === country);

    if (findCountry) {
      alert('이미 등록된 있는 국가입니다.');
      return;
    }
    const newcountryState = {
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze)
    };

    const sortedArr = [...countryState, newcountryState].sort((a, b) => {
      if (a.gold === b.gold) return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze);
      else return b.gold - a.gold;
    });
    setCountryState(sortedArr);

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

    const findCountry = countryState.find((e) => e.country === country);

    if (!findCountry) {
      alert('등록 되어 있지 않은 국가입니다.');
      return;
    }

    const updateCounrty = countryState.map((e) =>
      e.country === country ? { ...e, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) } : e
    );

    return setCountryState(updateCounrty);
  };

  const onHandleDelete = (countryToDelete) => {
    const deletedCounrty = countryState.filter((e) => e.country !== countryToDelete);
    setCountryState(deletedCounrty);
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

      {countryState.length === 0 ? (
        <Nodata />
      ) : (
        <Table
          onHandleDelete={onHandleDelete}
          setCountryState={setCountryState}
          countryState={countryState}
          country={country}
        />
      )}
    </main>
  );
};

export default Main;
