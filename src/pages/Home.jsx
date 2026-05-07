import { useState } from "react";
import AddTaskMenu from "../components/AddTaskMenu";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="mb-4">
        <button onClick={() => setShowPopup(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
          + Add Task
        </button>
      </div>
      <div className="flex flex-row gap-4 h-[calc(100vh-120px)]">
        <section className="border p-4 w-1/2 overflow-y-auto">
          <h2 className="font-bold text-lg mb-4">Today's Tasks</h2>
          <div className="mb-2 p-2 bg-gray-50 border rounded">
              <div className="flex justify-between">
                <span className="font-bold">Title 1</span>
                <span className="text-sm text-gray-500">02-04-2007</span>
              </div>
              <div className="text-sm text-gray-600 my-1">Description 1</div>
              <div className="text-xs text-gray-500">Priority: High | Tags: Work</div>
              <button className="text-blue-500">Complete</button>
          </div>
        </section>

        <div className="w-1/2 flex flex-col gap-4">
          <section className="border p-4 flex-2 overflow-y-auto">
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


      {showPopup && <AddTaskMenu onClose={() => setShowPopup(false)}/>}
    </>
  );
}
