"use client";

import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";

export default function FormPage() {
  const router = useRouter();
  const params = useParams();
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

    if (params.id) {
      try {
        const res = await fetch(`/api/tasks/${params.id}`, {
          method: "PUT",
          body: JSON.stringify(newTask),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();

        if (res.status === 200) {
          router.push("/");
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
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
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.status === 200) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setNewTask(data);
        });
    }
  }, [params.id]);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-3xl">
          {params.id ? "Edit Task" : "Create Task"}
        </h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTask.title}
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="description..."
          value={newTask.description}
          rows={3}
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}></textarea>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded font-medium w-1/3">
            Save
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded font-medium w-1/3">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
