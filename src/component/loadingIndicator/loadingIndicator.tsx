import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingIndicator = () => {
  return (
    <div>
      <Spinner className="primaryColor" animation="border" variant="primary"></Spinner>
    </div>
  );
}

export { LoadingIndicator }
