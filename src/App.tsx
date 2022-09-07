import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <div>
      <Header />
      <main className="mob:px-4">
        <Tasks />
      </main>
    </div>
  )
}

export default App
