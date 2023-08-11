export function mapTasksFromApi (taskList) {
  return taskList.map((task) => ({
    id: task._id,
    title: task.title,
    description: task.description,
    createdAt: task.createdAt
  }))
}

export function mapTaskFromApi (task) {
  return {
    id: task._id,
    title: task.title,
    description: task.description,
    createdAt: task.createdAt
  }
}

export function mapTasksToApi (taskList) {
  return taskList.map((task) => ({
    _id: task.id,
    title: task.title,
    description: task.description,
    createdAt: task.createdAt
  }))
}

export function mapTaskToApi (task) {
  return {
    _id: task.id,
    title: task.title,
    description: task.description,
    createdAt: task.createdAt
  }
}
