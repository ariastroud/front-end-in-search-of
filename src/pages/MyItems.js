const MyItems = (props) => {
  return (
    <div className="container py-3">
      <div className="card-deck row row-cols-md-4">
        {props.itemsByUser.map((item) => (
          <div className="col mb-5" key={item.id}>
            <div className="card h-100" style={{ width: "18rem" }}>
              <img src={item.file} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
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
      </div>
    </div>
  );
};

export default MyItems;
