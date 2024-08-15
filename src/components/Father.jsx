import Child from './Child';

export default function Father({ houseName, pocketMoney }) {
  const FatherMoney = '빌딩';

  return <Child houseName={houseName} pocketMoney={pocketMoney} FatherMoney={FatherMoney} />;
}
