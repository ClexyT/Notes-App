// eslint-disable-next-line react/prop-types


const NoteManager = ({tittle,description,category})=> {
  const isDescription =  description ? description : "Sin descripcion";  
  const isTittle = tittle? tittle : "Sin titulo";
  
  
  return ( 
    <div>
      <div >
        <a className="m-20">
            
            <h2 className={category}>{isTittle}</h2>
            <h4 className={category}>{isDescription}</h4>
            
        </a>
      </div>
    </div>
  )
}

export default NoteManager
