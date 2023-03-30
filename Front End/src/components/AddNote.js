import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const CHAR_LIMIT = 200;

  const handleTextChange = (event) => {
    // update text if:
    // 1) the note hasn't reached the character limit OR
    // 2) the user is pressing backspace
    if (
      noteText.length < CHAR_LIMIT || // (1)
      event.nativeEvent.inputType === "deleteContentBackward" // (2)
    ) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    // check that note has actual characters
    if (noteText.trim() !== "") {
      handleAddNote(noteText);
      // clear text field
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a new note"
        value={noteText}
        onChange={handleTextChange}
      ></textarea>
      <div className="note-footer">
        <small> {CHAR_LIMIT - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
};

export default AddNote;
