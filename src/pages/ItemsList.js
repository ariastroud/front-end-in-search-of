import Filter from "../components/Filter";
import ItemCard from "../components/ItemCard";

const ItemsList = ({ items, filterCallback, loginData }) => {
  return (
    <div className="py-3">
      <div className="row">
        <div className="col-2 px-3 py-2">
          <Filter filterCallback={filterCallback} />
        </div>
        <div className="col-10 px-3 py-2">
          <ItemCard items={items} loginData={loginData} />
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
