export default function Notes() {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Notes</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">+ Add Note</button>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4 rounded shadow-sm bg-yellow-50">
          <h3 className="font-bold mb-2">Title</h3>
          <p className="text-sm">Texts, very long texts</p>
        </div>
      </div>
    </div>
  );
}
