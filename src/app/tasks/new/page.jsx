"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function FormPage() {
  const router = useRouter();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (res.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-3xl">Create Task</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="description..."
          rows={3}
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded font-medium w-full">
          Save
        </button>
      </form>
    </div>
  );
}
