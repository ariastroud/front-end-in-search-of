import Filter from "../components/Filter";
import ItemCard from "../components/ItemCard";

const MyItems = ({ items, filterCallback, loginData, updateItem, filter }) => {
  return (
    <div className="py-3">
      <div className="row">
        <div className="col-2 px-3 py-2">
          <Filter
            filter={filter}
            loginData={loginData}
            filterCallback={filterCallback}
          />
        </div>
        <div className="col-10 px-3 py-2">
          {items.length === 0 ? (
            <div className="px-5 py-3">No matches</div>
          ) : (
            <ItemCard
              items={items}
              loginData={loginData}
              updateItem={updateItem}
              filter={filter}
            />
          )}
          {/* <ItemCard
            items={items}
            loginData={loginData}
            updateItem={updateItem}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
