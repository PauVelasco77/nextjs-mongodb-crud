import { API_URL } from '@/constants'
import { mapTasksFromApi } from '@/utils/mapApiTasks'
import { useCallback } from 'react'

export default function useApi () {
  const getAllTasks = useCallback(async () => {
    try {
      const res = (await fetch(`${API_URL}/tasks`))
      const data = await res.json()

      const mappedTasks = mapTasksFromApi(data)

      return mappedTasks
    } catch (error) {
      throw new Error(error)
    }
  }, [])

  return { getAllTasks }
}
