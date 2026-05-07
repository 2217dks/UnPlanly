import { useState } from "react";

export default function AddTaskMenu({ onClose, setTasks }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Low");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!title || !date || !desc) { 
        setError("Title, description, and date are required.")
        return; 
    } 
    
    const newTask = {
      title,
      description: desc,
      priority,
      date,
      tags
    };

    setTasks((prev) => [...prev, newTask]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96 flex flex-col gap-4">
        <h2 className="font-bold text-xl">Add Task</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="border p-2" />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" className="border p-2"></textarea>
        
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border p-2">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        
        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="border p-2" />
        <input value={tags} onChange={(e) => setTags(e.target.value)} type="text" placeholder="Tags (e.g. #work)" className="border p-2" />
        
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
}