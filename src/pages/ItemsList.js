import userEvent from "@testing-library/user-event";

const ItemsList = (props) => {
  return (
    <div className="card-deck row row-cols-md-4">
      {/* <div className="col mb-5"> */}
      {props.allItemData.map((item) => (
        <div className="col mb-5">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img src={item.file} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              {/* <p className="card-text">{item.description}</p> */}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Brand: {item.brand}</li>
              <li className="list-group-item">Size: {item.size}</li>
              <li className="list-group-item">Category: {item.category}</li>
            </ul>
            <div className="card-body">
              <a href="google.com" className="card-link">
                See More
              </a>
              <a href="google.com" className="card-link">
                Message {item.user}
              </a>
            </div>
          </div>
        </div>
      ))}
      {/* </div> */}
    </div>
    // <ul>
    //   {props.allItemData.map((item) => (
    //     <li key={item.id}>
    //       {item.title} posted by {item.user}
    //     </li>
    //   ))}
    // </ul>
  );
};

export default ItemsList;
