import Filter from "../components/Filter";
import ItemCard from "../components/ItemCard";

const SearchResults = ({
  searchString,
  filterCallback,
  filter,
  items,
  loginData,
}) => {
  return (
    <div className="py-3">
      <div className="row">
        <div className="col-2 px-3 py-2">
          <Filter
            searchFilter={searchString}
            filterCallback={filterCallback}
            filter={filter}
          />
        </div>
        <div className="col-10 px-3 py-2">
          {items.length === 0 ? (
            <div className="px-5 py-3">No matches</div>
          ) : (
            <ItemCard items={items} loginData={loginData} />
          )}
          {/* <ItemCard items={items} loginData={loginData} /> */}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
