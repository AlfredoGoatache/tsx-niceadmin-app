
const Panel = ({titulo = 'Título por defecto', contenido = 'Contenido del Panel'}: any) => {
    return (
<section className="panel">
              <header className="panel-heading">
                <h3>{titulo}</h3>
              </header>
              <div className="panel-body">
                {contenido}
              </div>
            </section>
    )
}

export{
    Panel
}