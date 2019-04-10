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

// Object of To do 
const myTodos = [
    {
        id: 1, 
        text: 'Write the letter',
        tags: ['important', 'writing'],
        favorite: true
    },
    {
        id: 2, 
        text: 'Eat some lunch', 
        tags: ['food'],
        completed: true
    },
    {
        id: 3, 
        text: 'Run around the city',
        favorite: true,
        completed: true //add this to show activity completed
    },
    {
        id: 4, 
        text: 'Get groceries', 

    },
    {
        id: 5, 
        text: 'Code javascript', 
        completed: false, 
    }
]

// Adding checkmark for activity completed , show all the todo activity 
const showObjectTodos = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        let itemString = ``

        itemString += item.completed ? '☑': '☐'
        itemString += `${item.text} `
        itemString += item.favorite ? `★`: ``

        console.log(itemString)
    }
}
console.log(showObjectTodos(myTodos))
console.log("")


// Call showtodo
const searchObjectTodosText = (data, searchText) => {
    let newTodos = []

    for (let index = 0; index < data.length; index++){
        const item = data[index]

        const lowerCasedItemText = item.text.toLowerCase()
        const lowerCasedSearchText = searchText.toLowerCase()

        if (lowerCasedItemText.includes(lowerCasedSearchText)) {
            newTodos.push(item)
        }
    }

    return newTodos
}

const foundArrayTodos = searchObjectTodosText(myTodos, 'the')

showObjectTodos(foundArrayTodos)
console.log("")

// Adding new object to todos using push
let newMyTodos = myTodos;
newMyTodos.push({ id: 6, text: 'Sleep'});
console.log(newMyTodos)
