import React from "react";
import { useOutletContext } from "react-router-dom";
export function Todo() {
  const context = useOutletContext();
  return (
    <div className="container pages-container">
      <h1 className="pages">Coming Soon</h1>
    </div>
  );
}
