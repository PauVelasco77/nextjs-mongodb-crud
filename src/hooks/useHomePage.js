import { useEffect, useState } from 'react'
import useApi from './useApi'

export default function useHomePage () {
  const [tasks, setTasks] = useState([])
  const { getAllTasks, deleteTask, updateTask } = useApi()

  const handleDeleteTask = (id) => {
    deleteTask(id).then(() => {
      setTasks(tasks.filter((task) => task.id !== id))
    }).catch((error) => { throw new Error(error) })
  }

  const handleChangeStatus = (task) => {
    const newTask = { ...task, completed: !task.completed }

    updateTask(newTask).then(() => {
      setTasks(tasks.map((task) => task.id === newTask.id ? newTask : task))
    }).catch((error) => { throw new Error(error) })
  }

  useEffect(() => {
    getAllTasks().then((data) => setTasks(data)).catch((error) => { throw new Error(error) })
  }, [getAllTasks])

  return { tasks, handleDeleteTask, handleChangeStatus }
}
