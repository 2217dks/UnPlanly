export default function Weekly() {
  const days = ["Today", "Tomorrow", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Weekly View</h2>
      
      {days.map((day) => (
        <section key={day} className="border p-4 rounded bg-gray-50">
          <h3 className="font-bold text-lg mb-4 border-b pb-2">{day}</h3>
          
          <div className="bg-white border p-3 rounded mb-2">
            <div className="font-bold">Task 1</div>
            <div className="text-sm text-gray-600 mt-1">Detailed description longer texts</div>
            <div className="text-xs text-gray-400 mt-2">Importance, Tags</div>
          </div>
          
        </section>
      ))}
    </div>
  );
}
