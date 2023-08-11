import { useEffect, useState } from 'react'
import useApi from './useApi'

export default function useHomePage () {
  const [tasks, setTasks] = useState([])
  const { getAllTasks } = useApi()

  useEffect(() => {
    getAllTasks().then((data) => setTasks(data)).catch((error) => { throw new Error(error) })
  }, [getAllTasks])

  return { tasks }
}
