import Todos from "./Components/Todos";
import NewTodo from "./Components/NewTodo";
import TodosContextProvider from "./Store/todo-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
