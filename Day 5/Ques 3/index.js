// https://jsonplaceholder.typicode.com/todos

const todos = []

const onRecv = data => {
    // console.log(`Recvd: ${JSON.stringify(data)}`)
    const completedTodos = data.filter(o => o.completed)
    completedTodos.forEach(todo => console.log(`${todo.userId} has completed ${todo.title}`))
}

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => onRecv(json))