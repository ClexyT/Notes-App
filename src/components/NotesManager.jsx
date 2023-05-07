import NoteManager from "./NoteManager"
import AddNote from "./AddNote"

// categories 
  const red = "text-red-600"
  const blue = "text-blue-600"
  const green = "text-green-600"

const NotesManager = () => {
  return (
    <div className="noteManager">
      <AddNote />
      <div>
        <NoteManager 
        tittle="hola titulo" 
        description="hola descripcion" 
        category={green}
        /> 
        <NoteManager 
        tittle="" 
        description="" 
        category={blue}
        />    
      </div>
    </div>
  )
}

export default NotesManager
