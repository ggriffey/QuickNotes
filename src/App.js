import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "10/10/10",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "12/23/99",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "6/10/10",
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "10/17/10",
    },
  ]);
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
