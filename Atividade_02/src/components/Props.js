
function Evento(props) {
    return(
        <div className="App">
        <header className="App-header">
            <h2>{props.nome}</h2>
            <p>Data: {props.data}</p>
            <p>Horario: {props.horario}</p>
            <p>Local: {props.local}</p>
            <p>Cidade: {props.cidade}</p>
            <p>Genero: {props.genero}</p>
        </header>
      </div>
    )
}

export default Evento