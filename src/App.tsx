import NavBar from "./components/navBar"
import About from "./components/about"
import Technologies from "./components/technologies/technologies"
import Projects from "./components/projects/projects"
import Curriculum from "./components/curriculum"
import Contacts from "./components/contacts"

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
        <Curriculum></Curriculum>
        <Contacts></Contacts>
      </main>
    </div>
  )
}

export default App
