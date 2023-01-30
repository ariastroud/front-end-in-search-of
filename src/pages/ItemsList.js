const ItemsList = (props) => {
  return (
    <ul>
      {props.allItemData.map((item) => (
        <li key={item.id}>
          {item.title} posted by {item.user}
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
