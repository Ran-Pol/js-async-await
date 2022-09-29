//   Async with Async and Await

async function requestHandler(req, res) {
  try {
    const user = await FindById(req.userId)
    const task = await Taks.findById(user.tasksId)
    task.completed = true
    await task.save()
    res.send('Tasks completed')
  } catch (errors) {
    res.send(errors)
  }
}
