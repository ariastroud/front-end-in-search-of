const ItemCard = ({ items, loginData, updateItem, filter }) => {
  return (
    <div className="card-deck row-cols-md-3">
      {items.map((item) => (
        <div className="col mb-5" key={item.id}>
          <div className="card h-100" style={{ width: "18rem" }}>
            <img src={item.file} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Brand: {item.brand}</li>
              <li className="list-group-item">Size: {item.size}</li>
              <li className="list-group-item">Category: {item.category}</li>
              {filter === "userItems" &&
              loginData.id === item.user_id &&
              !item.found ? (
                <li className="list-group-item text-center">
                  <button
                    onClick={() => updateItem(item.id)}
                    className="btn btn-secondary btn-xs card-link"
                  >
                    Mark Found
                  </button>
                </li>
              ) : item.found ? (
                <li className="list-group-item text-center">
                  <button className="btn btn-dark btn-xs card-link">
                    Found
                  </button>
                </li>
              ) : (
                <li className="list-group-item">
                  <a
                    href={`mailto:${item.email}?subject=${item.title}`}
                    className="card-link text-secondary"
                  >
                    Message {item.user}
                  </a>
                </li>
              )}
              {/* {item.found ? (
                <button className="btn btn-info btn-xs card-link">Found</button>
              ) : (
                <button className="btn btn-info btn-xs card-link">
                  <a
                    href={`mailto:${item.email}?subject=${item.title}`}
                    className="card-link"
                  >
                    Message {item.user}
                  </a>
                </button>
              )} */}
              {/* {item.found ? (
                <></>
              ) : (
                <a
                  href={`mailto:${item.email}?subject=${item.title}`}
                  className="card-link"
                >
                  Message {item.user}
                </a>
              )} */}
            </ul>

            {/* <div className="card-body"> */}
            {/* {filter === "userItems" &&
              loginData.id === item.user_id &&
              !item.found ? (
                <button
                  onClick={() => updateItem(item.id)}
                  className="btn btn-info btn-xs card-link"
                >
                  Mark Found
                </button>
              ) : (
                <></>
              )} */}

            {/* {item.found ? (
                <button className="btn btn-info btn-xs card-link">Found</button>
              ) : (
                <></>
              )}
              {item.found ? (
                <></>
              ) : (
                <a
                  href={`mailto:${item.email}?subject=${item.title}`}
                  className="card-link"
                >
                  Message {item.user}
                </a>
              )} */}
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
