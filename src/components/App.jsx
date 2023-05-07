import AddNote from "./AddNote"
import NotesManager from "./NotesManager"

function App() {
  return (
    <div> 
      <h1 className="flex justify-center text-2xl">Notes App</h1>
      <AddNote />
      <NotesManager />
      </div>
  )
}

export default App
