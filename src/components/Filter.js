import axios from "axios";

const filterItemsApi = async (filterData) => {
  const results = await axios.get(
    `http://localhost:5000/items?filter=${filterData}`
  );
  return results.data;
};

const searchFilterApi = async (filterData, searchFilter) => {
  const results = await axios.get("http://localhost:5000/items/search", {
    params: {
      title: searchFilter,
      filter: filterData,
    },
  });
  return results.data;
};

const Filter = (props) => {
  const handleChange = async (e) => {
    const filterData = e.target.value;
    if (props.searchFilter) {
      const results = await searchFilterApi(filterData, props.searchFilter);
      props.filterCallback(results);
    } else {
      const results = await filterItemsApi(filterData);
      props.filterCallback(results);
    }
  };

  return (
    <div className="py-3">
      <div className="row">
        <h6 className="px-3 py-2">Filter</h6>
        <hr className="border-2 border-top border-secondary" />
        <form className="px-3 py-2">
          <h6>Size</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="xsRadio"
              onChange={handleChange}
              value="xs"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              XS (0-2)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="sRadio"
              onChange={handleChange}
              value="s"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              S (4-6)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="mRadio"
              onChange={handleChange}
              value="m"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              M (6-8)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="lRadio"
              onChange={handleChange}
              value="l"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              L (8-10)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="xlRadio"
              value="xl"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              XL (16)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="2xlRadio"
              onChange={handleChange}
              value="2xl"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              2XL (18-20)
            </label>
          </div>
          <hr className="border-2 border-top border-secondary" />
          <h6>Category</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="clothingRadio"
              value="clothing"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Clothing
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="handbagsRadio"
              value="handbags"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Handbags
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="jewelryRadio"
              value="jewelry"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Jewelry
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="accessoriesRadio"
              value="accessories"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Accessories
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="shoesRadio"
              value="shoes"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Shoes
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
