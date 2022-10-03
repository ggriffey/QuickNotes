import { useState } from "react";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";
import PageHeader from "./components/PageHeader";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is a lovely first note",
      date: "4/24/18",
    },
    {
      id: nanoid(),
      text:
        "It took me over four years to write this note! \n\n I could not decide what to write :(",
      date: "5/12/22",
    },
    {
      id: nanoid(),
      text: "This is my third note. I feel good about this one",
      date: "7/10/22",
    },
    {
      id: nanoid(),
      text: "I wrote this note in the future",
      date: "10/10/27",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  // Handler Functions:

  const addNote = (text) => {
    // create new note
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // update notes list with setNotes
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <PageHeader />
      <SearchBar handleSearch={setSearchText} />
      <NoteList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
