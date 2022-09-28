function TipoIngresso(props) {
    return(
        <div className="App">
        <header className="App-header">           
            <li>{props.tipo}: R${props.preco}</li>           
        </header>
      </div>
    )
}

export default TipoIngresso