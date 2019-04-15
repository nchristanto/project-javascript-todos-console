const todos = ['Write the letter', 'Eat some lunch', 'Run around the city']

// Show todo text
const showTodos = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        console.log(`[${index + 1}] ${item}`)
    }
}
showTodos(todos)
console.log("")


// Search todo text 
const searchTodos = (data, textToSearch) => {
    let newTodos = []

    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        const lowerCasedItem = item.toLowerCase()
        const lowerCasedText = textToSearch.toLowerCase()

        if (lowerCasedItem.includes(lowerCasedText)) {
            newTodos.push(item)
        }
    }
    return newTodos
}

// Test Cases
// const foundTodos = searchTodos(todos, 'run')
// showTodos(foundTodos)

const foundTodos = searchTodos(todos, 'THE')
showTodos(foundTodos)
console.log("")

// Adding activity to todos using push 
todos.push('Code some javascript', 'Pick-up sistur at school', 'Get groceries');
console.log(todos)
console.log("")

// Delete activity in todos using pop. Give alert when it removed
console.log(todos.pop())
console.warn(todos)
console.log("")

// Replace misspelled todos using splice 
todos.splice(4, 1, 'Pick-up sister at school')
console.log(todos)
console.log("")

// Search for new todos after new data added 
const foundNewTodos = searchTodos(todos, 'sister')
console.log(foundNewTodos)
console.log("")
