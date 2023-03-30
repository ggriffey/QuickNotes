import React from "react";
import { MdOutlineNightlight } from "react-icons/md";

const PageHeader = ({ handleToggleMode }) => {
  return (
    <div className="header">
      <h1>QuickNotes</h1>
      <button id="toggle_mode" onClick={handleToggleMode}>
        Toggle Mode
        <MdOutlineNightlight />
      </button>
    </div>
  );
};

export default PageHeader;
