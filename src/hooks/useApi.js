import { API_URL } from '@/constants'
import { mapTaskFromApi, mapTaskToApi, mapTasksFromApi } from '@/utils/mapApiTasks'
import { useCallback } from 'react'

export default function useApi () {
  const getAllTasks = useCallback(async () => {
    try {
      const res = (await fetch(`${API_URL}/tasks`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }))
      const data = await res.json()

      const mappedTasks = mapTasksFromApi(data)

      return mappedTasks
    } catch (error) {
      throw new Error(error)
    }
  }, [])

  const getTaskById = useCallback(async (id) => {
    try {
      const res = (await fetch(`${API_URL}/tasks/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }))
      const data = await res.json()

      const mappedTask = mapTaskFromApi(data)

      return mappedTask
    } catch (error) {
      throw new Error(error)
    }
  }, [])

  const createTask = useCallback(async (newTask) => {
    try {
      const mappedTask = mapTaskToApi(newTask)

      const res = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        body: JSON.stringify(mappedTask),
        headers: {
          'Content-Type': 'application/json'
        }

      })
      const task = await res.json()
      if (task.error) {
        throw new Error(task.message)
      }
      if (res.status === 200) {
        const mappedTaskFromApi = mapTaskFromApi(task)
        return mappedTaskFromApi
      }
    } catch (error) {
      throw new Error(error)
    }
  }, [])

  const updateTask = useCallback(async (updatedTask) => {
    try {
      const mappedTask = mapTaskToApi(updatedTask)

      const res = await fetch(`${API_URL}/tasks/${updatedTask.id}`, {
        method: 'PUT',
        body: JSON.stringify(mappedTask),
        headers: {
          'Content-Type': 'application/json'
        }

      })
      const formatRes = await res.json()

      if (res.status === 200) {
        return formatRes
      }
      throw new Error(formatRes.message)
    } catch (error) {
      throw new Error(error.message)
    }
  }, [])

  const deleteTask = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE'
      })
      await res.json()

      if (res.status === 200) {
        return true
      }
    } catch (error) {
      throw new Error(error)
    }
  }, [])

  return { getAllTasks, getTaskById, createTask, updateTask, deleteTask }
}
