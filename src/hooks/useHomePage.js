import { useEffect, useState } from 'react'
import useApi from './useApi'
import { mapTaskFromApi } from '@/utils/mapApiTasks'
import { sortTasks } from '@/utils/sortTasksByComplete'

export default function useHomePage () {
  const [tasks, setTasks] = useState(null)
  const [errors, setErrors] = useState({
    createTask: '',
    updateTask: '',
    deleteTask: ''
  })
  const { getAllTasks, deleteTask, updateTask, createTask } = useApi()

  useEffect(() => {
    getAllTasks()
      .then((data) =>
        setTasks(sortTasks(data))
      )
      .catch((error) => { throw new Error(error) })
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

  const handleCreateTask = async (title) => {
    try {
      const data = await createTask({ title })
      const sortTasksFromApi = sortTasks([...tasks, data])
      setTasks(sortTasksFromApi)
      setErrors({ ...errors, createTask: '' })
    } catch (error) {
      setErrors({ ...errors, createTask: error.message })
      throw new Error(error.message)
    }
  }

  const handleUpdateTask = async (updatedTask) => {
    try {
      const data = await updateTask(updatedTask)
      const mappedTask = mapTaskFromApi(data)
      const sortTasksFromApi = sortTasks(tasks.map((task) => {
        if (task.id === mappedTask.id) return mappedTask
        return task
      }))

      setTasks(sortTasksFromApi)
      setErrors({ ...errors, updateTask: '' })
    } catch (error) {
      setErrors({ ...errors, updateTask: error.message })
      throw new Error(error.message)
    }
  }

  return { tasks, handleDeleteTask, handleCreateTask, handleUpdateTask, errors }
}
