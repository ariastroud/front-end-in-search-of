import React from "react";
import main from "../assets/camila-damasio-mWYhrOiAgmA-unsplash.jpg";

const Home = () => {
  return (
    <div className="py-3">
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 btn holder">
              <img
                className="img-fluid rounded"
                style={{ width: "500px" }}
                alt="handbags"
                src={main}
              />
            </div>
            <div className="col-sm-6">
              <h1 className="display-4">What are you searching for?</h1>
              {/* <p className="lead">Search bar? idk</p> */}
              <hr className="my-4 w-50" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lorem nisl, dictum sit amet lobortis pellentesque, tempus
                sollicitudin ipsum. Donec sit amet condimentum urna. Aliquam
                efficitur velit nec eros eleifend.
              </p>
              {/* <a className="btn btn-primary btn-lg" href="#" role="button">
              Sign In
            </a> */}
              {/* <img className="w-25 d-inline" alt="handbags" src={main} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
