import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Mengambil file dari folder public
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setNotes(data.notes))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Notes</h1>
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={deleteNote} />
        ))
      ) : (
        <p>No notes available. Add some notes to get started!</p>
      )}
    </div>
  );
};

export default NotesList;
