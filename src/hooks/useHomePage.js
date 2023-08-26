import { useEffect, useState } from 'react'
import useApi from './useApi'

export default function useHomePage () {
  const [tasks, setTasks] = useState([])
  const [errors, setErrors] = useState({
    createTask: '',
    updateTask: '',
    deleteTask: ''
  })
  const { getAllTasks, deleteTask, updateTask, createTask } = useApi()

  useEffect(() => {
    getAllTasks().then((data) => setTasks(data)).catch((error) => { throw new Error(error) })
  }, [getAllTasks])

  const handleDeleteTask = (id) => {
    deleteTask(id).then(() => {
      setTasks(tasks.filter((task) => task.id !== id))
      setErrors({ ...errors, deleteTask: '' })
    }).catch((error) => {
      setErrors({ ...errors, deleteTask: error })
      throw new Error(error)
    })
  }

  const handleChangeStatus = (task) => {
    const newTask = { ...task, complete: !task.complete }

    updateTask(newTask).then(() => {
      setTasks(tasks.map((task) => task.id === newTask.id ? newTask : task))
    }).catch((error) => { throw new Error(error) })
  }

  const handleCreateTask = async (title) => {
    try {
      const data = await createTask({ title })
      setTasks([...tasks, data])
      setErrors({ ...errors, createTask: '' })
    } catch (error) {
      setErrors({ ...errors, createTask: error.message })
      throw new Error(error.message)
    }
  }

  const handleUpdateTask = async (updatedTask) => {
    try {
      const data = await updateTask(updatedTask)
      setTasks(tasks.map((task) => task.id === data.id ? data : task))
      setErrors({ ...errors, updateTask: '' })
    } catch (error) {
      setErrors({ ...errors, updateTask: error.message })
      throw new Error(error.message)
    }
  }

  return { tasks, handleDeleteTask, handleChangeStatus, handleCreateTask, handleUpdateTask, errors }
}
