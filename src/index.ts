/**
 * The program
 *
 *
 * By: Igor
 * Version: 1.0
 * Since:   2022-09-17
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const myStack = new MrCoxallStack()

// Input & Process
while (true) {
  const uInput = prompt('Enter a number (! to pop): ')

  if (uInput === '!') {
    break
  } else {
    const number = parseInt(uInput)
    if (isNaN(number)) {
      console.log(`${uInput} is not a number`)
    } else {
      myStack.Push(number)
    }
  }
}

console.log('')
console.log(myStack.getStack())

console.log('Peek:', myStack.peekStack())
const lastValue = myStack.lastNumber()
if (lastValue == null) {
  console.log('Nothing to pop')
} else {
  console.log(`Popped: ${lastValue} out of stack`)
}

myStack.clearStack()
console.log('clearing')
console.log(myStack.getStack(), 'stack cleared')

console.log('\nDone.')
