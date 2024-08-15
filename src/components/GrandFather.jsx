import Father from './Father';

export default function GrandFather() {
  const houseName = '스파르타';
  const pocketMoney = '10 억 원';

  return <Father houseName={houseName} pocketMoney={pocketMoney} />;
}
