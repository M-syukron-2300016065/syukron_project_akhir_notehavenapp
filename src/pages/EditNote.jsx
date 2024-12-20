import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSave = () => {
    console.log("Updated Note:", { id, title, content, category });
    navigate("/notes");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Note</h1>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <input
        type="text"
        className="border p-2 w-full mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default EditNote;
