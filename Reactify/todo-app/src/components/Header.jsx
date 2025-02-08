// We tell the header that is going to expect some props
export function Header(props) {
    // The header receives the props and destruct the todos
    const {todos} = props
    const todoLength = todos.length
    // It will dinamically show the number of open tasks
    // It will show 'tasks' if we have more than 1, otherwise it will show 'task'
    const isTasksPlural = todos.length != 1;
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task';

    return(
        <header>
            <h1>You have {todoLength} open {taskOrTasks}.</h1>
        </header>
    )
}