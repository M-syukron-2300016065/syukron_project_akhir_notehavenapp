// AddNote.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleAddNote = () => {
    const newNote = { id: Date.now(), title, content, category };

    // Menambahkan catatan ke localStorage
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    // Redirect ke Dashboard setelah menambah catatan
    navigate("/");
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Note</h1>
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="border p-2 w-full mb-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Category"
        className="border p-2 w-full mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleAddNote} className="bg-blue-500 text-white p-2 rounded">
        Save
      </button>
    </div>
  );
};

export default AddNote;
