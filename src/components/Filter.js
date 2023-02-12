import {
  filterItemsApi,
  searchFilterApi,
  userFilterApi,
} from "../api/ApiFunctions";

const Filter = ({ filter, loginData, filterCallback, searchFilter }) => {
  const handleChange = async (e) => {
    const filterData = e.target.value;
    if (filter === "userItems") {
      const results = await userFilterApi(filterData, loginData.id);
      return filterCallback(results);
    } else if (filter === "searchItems") {
      const results = await searchFilterApi(filterData, searchFilter);
      return filterCallback(results);
    } else {
      const results = await filterItemsApi(filterData);
      return filterCallback(results);
    }
  };

  return (
    <div className="py-3">
      <div className="row">
        <h6 className="px-3 py-2">Filter</h6>
        <hr className="border-2 border-top border-secondary" />
        <form className="px-3 py-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="clothingRadio"
              value="clothing"
              onChange={handleChange}
            />
            <label
              className="form-check-label font-weight-bold"
              htmlFor="flexRadioDefault1"
            >
              Clothing
            </label>
          </div>
          <div className="px-2">
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
                M (8-10)
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
                L (12-14)
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
          </div>
          <hr className="border-2 border-top border-secondary" />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="shoesRadio"
              value="shoes"
              onChange={handleChange}
            />
            <label
              className="form-check-label font-weight-bold"
              htmlFor="flexRadioDefault1"
            >
              Shoes
            </label>
          </div>
          <div className="px-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="shoes5"
                onChange={handleChange}
                value="5"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                5
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="shoes6"
                onChange={handleChange}
                value="6"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                6
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="shoes7"
                onChange={handleChange}
                value="7"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                7
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="shoes8"
                onChange={handleChange}
                value="8"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                8
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="shoes9"
                value="9"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                9
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="shoes10"
                onChange={handleChange}
                value="10"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                10
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="filterRadio"
                id="shoes11"
                onChange={handleChange}
                value="11"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                11
              </label>
            </div>
          </div>
          <hr className="border-2 border-top border-secondary" />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="handbagsRadio"
              value="handbags"
              onChange={handleChange}
            />
            <label
              className="form-check-label font-weight-bold"
              htmlFor="flexRadioDefault1"
            >
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
            <label
              className="form-check-label font-weight-bold"
              htmlFor="flexRadioDefault1"
            >
              Jewelry
            </label>
          </div>
          <hr className="border-2 border-top border-secondary" />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filterRadio"
              id="resetRadio"
              value="reset"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Reset Filter
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
