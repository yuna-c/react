import Father from './Father';
import { FamilyContext } from './context/FamilyContext';

export default function GrandFather() {
  const houseName = '스파르타';
  const pocketMoney = '10 억 원';

  return (
    // value : 객체
    <FamilyContext.Provider value={{ houseName, pocketMoney }}>
      <Father />
    </FamilyContext.Provider>
  );
}
