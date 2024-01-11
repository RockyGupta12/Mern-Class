import { useEffect, useState } from "react";
import Note from "./components/Note";
import Notification from "./services/Notification";
import axios from "axios";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState("some error happened...");

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const [newNotes, setNewNotes] = useState("");
  const handlechange = (event) => {
    setNewNotes(event.target.value);
    // console.log(event.target.value)
  };

  const addNotes = (event) => {
    event.preventDefault();
    const newNoteobj = {
      id: notes.length + 1,
      title: newNotes,
      number: "1234567890",
      body: "third body",
      important: Math.random() > 0.5,
    };
    console.log(newNoteobj);
    axios
      .post("http://localhost:3002/notes", newNoteobj)
      .then((response) => {
        console.log(response);
        setNotes(notes.concat(response.data));
        setNewNotes("");
      })
      .catch((error) => {
        setErrorMessage(`Cannot add this node to the server`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };
  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };
    axios.put(url, changedNote).then((response) => {
      setNotes(notes.map((note) => (note.id === id ? response.data : note)));
    });
  };

  return (
    <div>
      <form onSubmit={addNotes}>
        <input value={newNotes} onChange={handlechange}></input>
        <button>Add</button>
      </form>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
        />
      ))}
      <div>
        <h1>Notes</h1>
        <Notification message={errorMessage} />
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? "important" : "All"}
        </button>
      </div>
    </div>
  );
};
export default App;
