const { taskOne, taskTwo } = require('./tasks')

async function main() {
  console.time('Measuring time')
  const valueone = await taskOne()
  const valuetwo = await taskTwo()
  console.timeEnd('Measuring time')

  console.log('Task One returned', valueone)
  console.log('Task Two returned', valuetwo)
}

main()
