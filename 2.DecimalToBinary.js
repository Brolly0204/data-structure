const Stack = require('./1.stack')

function decimalToBinary(number, radix) {
  const stack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let binaryString = ''
  let remainder

  if (!(radix >= 2 && radix <= 36)) {
    return ''
  }

  while (number > 0) {
    remainder = number % radix
    stack.push(remainder) // 入栈
    number = Math.floor(number / radix)
  }

  while (!stack.isEmpty()) {
    binaryString += digits[stack.pop()] // 出栈
  }

  return binaryString
}

console.log(decimalToBinary(10, 2))
console.log(decimalToBinary(10, 8))
console.log(decimalToBinary(10, 16))
