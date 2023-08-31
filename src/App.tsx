import NavBar from "./components/navBar"
import About from "./components/about"

function App() {
  return (
    <div>
      <header className="mb-2">
        <NavBar></NavBar>
      </header>
      <main>
        <About></About>
      </main>
    </div>
  )
}

export default App
