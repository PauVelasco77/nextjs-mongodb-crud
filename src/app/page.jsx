import TaskCard from "@/components/TaskCard";
import Task from "@/models/Task";
import {connectDB} from "@/utils/mongoose";

async function loadTasks() {
  connectDB();
  const tasks = await Task.find({});
  return tasks;
}

export default async function HomePage() {
  const tasks = await loadTasks();
  return (
    <div>
      <h1>Home Page</h1>
      <div className="grid grid-cols-3 gap-2">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
