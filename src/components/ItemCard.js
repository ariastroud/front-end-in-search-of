import Item from "./Item";
import { Link } from "react-router-dom";

const ItemCard = ({ items, loginData }) => {
  // console.log(loginData.id);
  if (loginData.id)
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
              </ul>
              <div className="card-body">
                {/* <a href="google.com" className="card-link">
                  See More
                </a> */}
                <Link to={`${item.id}`}>Click</Link>
                {/* <Link to={item.id}>Click</Link> */}

                {/* {loginData.id === item.user_id ? (
                  <button className="btn btn-info btn-xs card-link">
                    Mark Found
                  </button>
                ) : (
                  <></>
                )} */}
                {/* if logindata id matches card id, show mark found */}

                <a
                  href={`mailto:${item.email}?subject=${item.title}`}
                  className="card-link"
                >
                  {/* <a href={`mailto:${item.email}`}> */}
                  {/* <a href="mailto:`{item.email}`?subject={subject}&body={body}">Click to Send an Email</a> */}
                  Message {item.user}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ItemCard;
