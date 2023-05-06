const NoteVisualizer = () => {
  return (
    <div className="border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
      <p className="font-bold">Nota importante</p>
      <p>Este es un contenido de nota. Puedes personalizarlo utilizando las clases de Tailwind.</p>
     <div>
<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small className="text-body-secondary">3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small className="text-body-secondary">And some muted small print.</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small className="text-body-secondary">3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small className="text-body-secondary">And some muted small print.</small>
  </a>
</div>

</div>
     </div>
  )
}

export default NoteVisualizer