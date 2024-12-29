// NotesList.jsx
import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Mengambil catatan dari localStorage
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const deleteNote = (id) => {
    // Menghapus catatan dari localStorage
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
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
