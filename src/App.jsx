import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

 const addTask = () => {
  if (task === "") {
    alert("Please enter a task");
  } else {
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  }
};

const deleteTask = (i) => {
  const updatedTasks = tasks.filter((item, index) => index !== i);
  setTasks(updatedTasks);
};



  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="mx-auto max-w-md">

        <h1 className="text-2xl font-semibold text-center mb-4">
          To-Do List
        </h1>

        <p className="mt-3 mb-3">
  Total Tasks: {tasks.length}
</p>

        <div className="flex gap-2">
          <input  className="border border-gray-300 p-2 rounded w-full" type="text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)}
/>

          <button onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded">Add
          </button>
        </div>

     <ul className="mt-4">
  {tasks.map((item, i) => (
    <li key={i} className="flex gap-2 p-2">

      <input
        type="checkbox"
        checked={item.completed}
        onChange={(e) => {
          const updatedTasks = [...tasks];
          updatedTasks[i].completed = e.target.checked;
          setTasks(updatedTasks);
        }}
      />

      <p className={item.completed ? "line-through text-gray-400" : ""}>
        {item.text}
      </p>
      <button
  onClick={() => deleteTask(i)}
  className="bg-red-500 text-white px-3 py-1 rounded"
>
  Delete
</button>

    </li>
  ))}
</ul>


      </div>
    </div>
  );
};

export default App;