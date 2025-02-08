export function Tabs(props) {
    // We have 3 tabs
    // We map through all of them and return a button for each
    const tabs = ['All', 'Open', 'Completed']
    const {todos} = props;
    return(
        <nav>
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ? 
                todos.length: tab === 'Open' ? 
                    todos.filter(val => !val.complete).length: 
                    todos.filter(val => val.complete).length;

                return (
                    <button key={tabIndex}>
                        <h4>{tab} ({numOfTasks})</h4>
                    </button>
                )
            })}
        </nav>
    )
}