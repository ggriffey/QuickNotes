import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";
import PageHeader from "./components/PageHeader";
import NoteList from "./components/NoteList";

const App = () => {
  // State Objects:
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my very first note! Many times have I desired to write it, but now it has been done!",
      date: "4/24/18",
    },
    {
      id: nanoid(),
      text: "It took me over four years to write this note! \n\nI could not decide what to write :(",
      date: "5/12/22",
    },
    {
      id: nanoid(),
      text: "This is my third note. Much less deliberation was required for in the construction of this note.",
      date: "7/10/22",
    },
    {
      id: nanoid(),
      text: "I wrote (will write ..?) this note in the future",
      date: "10/10/27",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  // run on first load (since array param is empty) to get notes from local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // save notes to local storage
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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

  const handleToggleMode = () => {
    const body = document.querySelector("html");
    const header = document.querySelector(".header h1");
    const button = document.querySelector("#toggle_mode");

    console.log(body.style.backgroundColor);
    if (body.style.backgroundColor === "var(--light-bg-color)") {
      // Dark mode
      body.style.backgroundColor = "var(--dark-bg-color)";
      header.style.color = "var(--light-header-color)";
      button.style.backgroundColor = "var(--light-header-color)";
      button.style.color = "var(--dark-header-color)";
    } else {
      // Light mode
      body.style.backgroundColor = "var(--light-bg-color)";
      header.style.color = "var(--dark-header-color)";
      button.style.backgroundColor = "var(--dark-header-color)";
      button.style.color = "var(--light-header-color)";
    }
  };

  return (
    <div className="container">
      <PageHeader handleToggleMode={handleToggleMode} />
      <SearchBar handleSearch={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
