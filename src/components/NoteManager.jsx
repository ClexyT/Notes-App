


const NoteManager = ({tittle,description})=> {
  const isDescription =  description ? description : "";  
  return ( 
    <div>
      <div>
        <a>

        <p>{tittle}</p>
        <p>{isDescription}</p>
        </a>
      </div>
    </div>
  )
}

{/* 
    <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small className="text-body-secondary">3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small className="text-body-secondary">And some muted small print.</small>
    </a> 
*/}

export default NoteManager
