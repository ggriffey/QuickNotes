import React from "react";

const PageHeader = ({ handleToggleMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button id="toggle_mode" onClick={handleToggleMode}>
        Toggle Mode
      </button>
    </div>
  );
};

export default PageHeader;
