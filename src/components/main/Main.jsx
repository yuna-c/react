import Input from './../input/Input';
import Button from './../button/Button';
import Nodata from './../nodata/Nodata';
import Table from './../table/Table';
import { useState } from 'react';
import './Main.scss';

const Main = () => {
  // default : const countries = { country: country, gold: gold, silver: silver, bronze: bronze }
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
    const deletedCounrty = countries.filter((e) => e.country !== countryToDelete);
    setCountries(deletedCounrty);
  };

  return (
    <main className="main">
      <form className="form-group" onSubmit={onHandleSubmit}>
        <Input label="국가명" type="text" placeholder="국가 입력" value={country} onChange={onAddCountry} />
        <Input label="금메달" type="number" placeholder="금메달 개수" value={gold} onChange={onAddGold} />
        <Input label="은메달" type="number" placeholder="은메달 개수" value={silver} onChange={onAddSilver} />
        <Input label="동메달" type="number" placeholder="동메달 개수" value={bronze} onChange={onAddBronze} />

        <Button onHandleUpdate={onHandleUpdate} />
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
