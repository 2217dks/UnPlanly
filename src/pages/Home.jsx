import { useState } from "react";
import AddTaskMenu from "../components/AddTaskMenu";

export default function Home({ tasks, setTasks, setCompletedTasks }) {
  const [showPopup, setShowPopup] = useState(false);
  const priorityWeight = { High: 1, Medium: 2, Low: 3 };
  const sortedTasks = [...tasks].sort((a, b) => priorityWeight[a.priority] - priorityWeight[b.priority]);

  const completeTask = (sortedIndex) => {
    const taskToComplete = sortedTasks[sortedIndex];
    setCompletedTasks((prev) => [...prev, taskToComplete]);
    setTasks((prev) => prev.filter((t) => t !== taskToComplete));
  };

  return (
    <>
      <div className="mb-4">
        <button onClick={() => setShowPopup(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
          + Add Task
        </button>
      </div>
      <div className="flex flex-row gap-4 h-[calc(100vh-120px)]">
        <section className="border p-4 w-1/2 overflow-y-auto">
          <h2 className="font-bold text-lg mb-4">Today's</h2>
          {sortedTasks.map((task, i) => (
            <div key={i} className="mb-2 p-2 bg-gray-50 border rounded">
              <div className="flex justify-between">
                <span className="font-bold">{task.title}</span>
                <span className="text-sm text-gray-500">{task.date}</span>
              </div>
              <div className="text-sm text-gray-600 my-1">{task.description}</div>
              <div className="text-xs text-gray-500">Priority: {task.priority} | Tags: {task.tags}</div>
              <button onClick={() => completeTask(i)} className="text-blue-500">Complete</button>
            </div>
          ))}
          {sortedTasks.length === 0 && <div className="text-gray-400 text-sm">No tasks yet.</div>}
        </section>

        <div className="w-1/2 flex flex-col gap-4">
          <section className="border p-4 flex-[2] overflow-y-auto">
            <h2 className="font-bold text-lg mb-2">Upcoming</h2>
            <div className="mt-2">
              <h3 className="font-semibold text-gray-700">Tomorrow</h3>
              <div className="text-sm">Groceries (Medium) #home</div>
            </div>
          </section>

          <section className="border p-4 flex-1 overflow-y-auto">
            <h2 className="font-bold text-lg mb-2">Reminders</h2>
            <div>Drink water @ 3 PM</div>
          </section>
        </div>
      </div>


      {showPopup && <AddTaskMenu onClose={() => setShowPopup(false)} setTasks={setTasks} />}
    </>
  );
}
  