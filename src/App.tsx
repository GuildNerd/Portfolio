import NavBar from "./components/navBar"
import About from "./components/about"
import Technologies from "./components/technologies"
import Projects from "./components/projects"

function App() {
  return (
    <div id="home">
      <header className="mb-2">
        <NavBar></NavBar>
      </header>
      <main>
        <About></About>
        <Technologies></Technologies>
        <Projects></Projects>
      </main>
    </div>
  )
}

export default App
