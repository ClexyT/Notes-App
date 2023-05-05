


const NoteManager = ({tittle,description})=> {
  const isDescription =  description ? description : "";  
  return ( 
    <div>
      <div >
        <p>{tittle}</p>
        <p>{isDescription}</p>
      </div>
    </div>
  )
}

export default NoteManager
