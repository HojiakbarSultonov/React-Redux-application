import React, { useCallback } from "react";
import { useSelector } from "react-redux";

function ValidationError() {
  const { error } = useSelector((state) => state.auth);
  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const message = error[name].join(", ");
      return `${name} -  ${message} `;
    });
  }, [error]);
  console.log(error);

  return (
    error !== null && errorMessage().map(error=>(
      <div className="alert alert-danger m-1 text-start p-1" role="alert" key={error}>
        {error}
      </div>
    ))
  );
}

export default ValidationError;
