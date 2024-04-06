import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceID } = useParams();
  return (
    <div className="text-center">
      <h1>Welcome to detail: {serviceID}</h1>
      <Link to="/checkout">
        <button className="btn btn-info">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
