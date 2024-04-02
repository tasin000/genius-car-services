import React from "react";

const Expert = (props) => {
  const { name, img } = props.expert;
  return (
    <div className="g-5 col-12 col-lg-4 col-md-6 col-sm-12">
      <div className="card " style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
