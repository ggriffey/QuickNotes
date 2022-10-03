import { useState } from "react";

const AddNote = () => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    //this is an update
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a new note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small> 300 chars remaining</small>
        <button className="save" onClick={handleSaveClick}>
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
};

export default AddNote;
