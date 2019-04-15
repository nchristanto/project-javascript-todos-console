
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
const showTodos = data => {
    for (let index = 0; index < data.length; index++) {
        const item = data[index]

        let itemString = ``

        itemString += item.completed ? '☑': '☐'
        itemString += `${item.text} `
        itemString += item.favorite ? `★`: ``

        console.log(itemString)
    }
}
console.log(showTodos(myTodos))
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

showTodos(foundArrayTodos)
console.log("")

// Adding new object to todos using push
let newMyTodos = myTodos;
newMyTodos.push({ id: 6, text: 'Sleep'});
console.log(newMyTodos)

