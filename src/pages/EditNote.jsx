// EditNote.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: "", content: "", category: "" });

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const foundNote = notes.find((note) => note.id === parseInt(id));
    if (foundNote) {
      setNote(foundNote);
    }
  }, [id]);

  const handleSave = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((n) =>
      n.id === parseInt(id) ? { ...n, ...note } : n
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate("/notes"); // Setelah mengedit, arahkan ke halaman Notes
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Note</h1>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        className="border p-2 w-full mb-4"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      ></textarea>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        value={note.category}
        onChange={(e) => setNote({ ...note, category: e.target.value })}
      />
      <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default EditNote;
