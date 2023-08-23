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

  const handleCreateTask = (title) => {
    createTask({ title }).then((data) => {
      setTasks([...tasks, data])
      setErrors({ ...errors, createTask: '' })
    }).catch((error) => {
      setErrors({ ...errors, createTask: error })
      throw new Error(error)
    })
  }

  useEffect(() => {
    getAllTasks().then((data) => setTasks(data)).catch((error) => { throw new Error(error) })
  }, [getAllTasks])

  return { tasks, handleDeleteTask, handleChangeStatus, handleCreateTask, errors }
}
