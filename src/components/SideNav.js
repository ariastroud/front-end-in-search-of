const SideNav = () => {
  return (
    <div className="w-25 p-3 bg-dark text-white">
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <h5>Filter</h5>
      <h6>Size</h6>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        />
        <label class="form-check-label" for="exampleRadios1">
          XS (0-2)
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        />
        <label class="form-check-label" for="exampleRadios2">
          Second default radio
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          disabled
        />
        <label class="form-check-label" for="exampleRadios3">
          Disabled radio
        </label>
      </div>
    </div>
  );
};

export default SideNav;
