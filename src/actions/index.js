let nextTodoId = 0;

export const addTodo = text => (
    {
        id: nextTodoId++,
        type: 'ADD_TODO',
        text
    }
)

export const setVisibiityFilter = filter =>(
    {
        type:'SET_VISIBILITY_FILTER',
        filter
    }
)

export const toggleTodo = id =>({
    id,
    type:'TOGGLE_TODO'
})

export const VisibilityFilter = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}