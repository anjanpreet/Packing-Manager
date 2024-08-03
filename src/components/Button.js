import React from "react";
import "../styles/button.css";
function Button({ id, onClick, children }) {
  return (
    <button id={id} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
