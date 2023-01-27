const ItemsList = (props) => {
  return (
    <ul>
      {props.allItemData.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ItemsList;
