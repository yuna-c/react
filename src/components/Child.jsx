const Child = ({ setCount }) => {
  const handleAddCound = () => {
    setCount((prev) => prev + 1);
  };

  return <button onClick={handleAddCound}>Count 1 증가</button>;
};

export default Child;
