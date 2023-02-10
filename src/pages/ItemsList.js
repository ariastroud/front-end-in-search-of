import Filter from "../components/Filter";
import ItemCard from "../components/ItemCard";

const ItemsList = ({
  items,
  filterCallback,
  loginData,
  searchString,
  filter,
}) => {
  return (
    <div className="py-3">
      <div className="row">
        <div className="col-2 px-3 py-2">
          {searchString ? (
            <Filter
              searchFilter={searchString}
              filterCallback={filterCallback}
              filter={filter}
            />
          ) : (
            <Filter filterCallback={filterCallback} />
          )}
        </div>
        <div className="col-10 px-3 py-2">
          {items.length === 0 ? (
            <div className="px-5 py-3">No matches</div>
          ) : (
            <ItemCard items={items} loginData={loginData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
