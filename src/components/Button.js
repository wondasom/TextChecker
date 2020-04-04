import React from "react";

export default ({ label, onClick }) => {
  return (
    <button class="button" onClick={onClick}>
      {label}
    </button>
  );
};
