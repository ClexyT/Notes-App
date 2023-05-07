// eslint-disable-next-line react/prop-types
const NoteManager = ({tittle,description})=> {
  const isDescription =  description ? description : "";  
  return ( 
    <div>
      <div >
        <a className="m-20">
            <h2 className="">{tittle}</h2>
            <h4 className="">{isDescription}</h4>
            
        </a>
      </div>
    </div>
  )
}

export default NoteManager
