import React from "react";
import { useRouteError } from "react-router-dom";
import errorImage from "../assets/error.gif";
export function Error() {
  const error = useRouteError();

  return (
    <>
      <div className="error">
        <img src={errorImage} alt="error" />
      </div>
    </>
  );
}
