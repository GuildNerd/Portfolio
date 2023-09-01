import NavBar from "./components/navBar"
import About from "./components/about"
import Technologies from "./components/technologies"

function App() {
  return (
    <div>
      <header className="mb-2">
        <NavBar></NavBar>
      </header>
      <main>
        <About></About>
        <Technologies></Technologies>
      </main>
    </div>
  )
}

export default App
