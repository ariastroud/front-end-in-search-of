import Filter from "../components/Filter";
import ItemCard from "../components/ItemCard";

const SearchResults = (props) => {
  return (
    <div className="py-3">
      <div className="row">
        <div className="col-2 px-3 py-2">
          <Filter
            searchFilter={props.searchString}
            filterCallback={props.filterCallback}
          />
        </div>
        <div className="col-10 px-3 py-2">
          <ItemCard items={props.items} />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
