import './App.css';
import Evento from './components/Props';
import TipoIngresso from './components/Props_Ingressos';
import logo from './components/logo.svg';

function App() {
  return(
    
    <div className="App">
      <Evento nome="Gustavo Lima" data="2 de agosto de 2019" horario="18:00 - 00:00 " local="Parque Povo" cidade="Cascavel-PR" genero="Arte forma de Sertanejo" />
      <h2>Ingressos:</h2 >
      <TipoIngresso tipo="Camarote(open bar)" preco="100,00"/>
      <TipoIngresso tipo="Camarote" preco="50,00"/>
      <TipoIngresso tipo="Front-stage" preco="40,00"/>
      <TipoIngresso tipo="Pista" preco="30,00"/>
      
    </div>
  )
}

export default App;
