// NoteCard.jsx
const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p>{note.content}</p>
      <p className="text-gray-500 text-sm">Category: {note.category}</p>
      <button
        onClick={() => onDelete(note.id)}
        className="bg-red-500 text-white p-2 rounded mt-2"
      >
        Delete
      </button>
      {/* Tombol Edit (akan menuju halaman EditNote) */}
      <button
        className="bg-blue-500 text-white p-2 rounded mt-2 ml-2"
        onClick={() => window.location.href = `/edit/${note.id}`}
      >
        Edit
      </button>
    </div>
  );
};

export default NoteCard;
