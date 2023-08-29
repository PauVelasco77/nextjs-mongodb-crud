export const sortTasks = (tasks) => {
  return tasks.sort((a, b) => {
    if (a.complete && !b.complete) {
      return 1 // Move 'a' after 'b'
    } else if (!a.complete && b.complete) {
      return -1 // Move 'a' before 'b'
    } else {
      // If both have the same "complete" value, maintain the original order
      return 0
    }
  })
}
