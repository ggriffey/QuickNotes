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
    const body = document.querySelector("body");
    const header = document.querySelector(".header h1");
    const button = document.querySelector("#toggle_mode");
    const searchBar = document.querySelector(".search-bar");
    const searchBarInput = document.querySelector(".search-bar input");

    console.log(
      window.getComputedStyle(body).getPropertyValue("background-color")
    );
    let modes;
    if (
      window.getComputedStyle(body).getPropertyValue("background-color") ===
      "rgb(245, 245, 245)"
    ) {
      // Dark mode
      modes = ["dark", "light"];
    } else {
      // Light mode
      modes = ["light", "dark"];
    }
    // update theme
    body.style.backgroundColor = `var(--${modes[0]}-bg-color)`;
    header.style.color = `var(--${modes[1]}-header-color)`;
    button.style.backgroundColor = `var(--${modes[0]}-header-color)`;
    button.style.color = `var(--${modes[1]}-header-color)`;
    header.style.textShadow = `var(--${modes[0]}-header-color) 1px 2px 2px`;
    searchBar.style.color = `var(--${modes[1]}-bg-color)`;
    searchBar.style.backgroundColor = `var(--${modes[0]}-search)`;

    // searchBarInput.style.backgroundColor = `var(--${modes[0]}-grey)`;

    let style = document.createElement("style");
    document.head.appendChild(style);
    style.sheet.insertRule(
      `input::placeholder {color: var(--${modes[1]}-header-color)}`
    );
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
