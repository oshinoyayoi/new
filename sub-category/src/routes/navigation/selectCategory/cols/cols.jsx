const Cols = ({ Item }) => {
  const { colNames, cols } = Item;
  return (
    <div className="a-colAndColname">
      <div className="a-colNames">{colNames}</div>
      <div className="a-cols">{cols}</div>
    </div>
  );
};
export default Cols;
