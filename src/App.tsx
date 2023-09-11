import NavBar from "./components/navBar"
import About from "./components/about"
import Technologies from "./components/technologies"
import Projects from "./components/projects"

function App() {
  return (
    <div id="home" className="mb-8">
      <header className="mb-2">
        <NavBar></NavBar>
      </header>
      <main className="flex flex-col gap-12">
        <About></About>
        <Technologies></Technologies>
        <Projects></Projects>
      </main>
    </div>
  )
}

export default App
