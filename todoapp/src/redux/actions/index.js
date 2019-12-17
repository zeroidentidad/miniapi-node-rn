exports.addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}

exports.deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}