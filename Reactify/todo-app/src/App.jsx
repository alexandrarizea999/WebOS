// A component is just a function
// Role: It returns a jsx
// Here we add all of the components
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
// I do not import the TodoCard because that will be inside TodoList

function App() {

  const todos = [
    {input: 'Hello! Add your first todo!', complete: true},
    {input: 'Get the groceries', complete: false},
    {input: 'Learn how to web design', complete: false},
    {input: 'Say hi to the gran gran', complete: true}
  ]

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  )
}

export default App
