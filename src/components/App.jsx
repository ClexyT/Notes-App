import AddNote from "./AddNote"
import NotesManager from "./NotesManager"

function App() {
  return (
    <div> 
      <h1 className="flex justify-center text-2xl neon ">Notes App</h1>
      <AddNote />
      <div className="bg-">
      <NotesManager />

      </div>
      </div>
  )
}

export default App
