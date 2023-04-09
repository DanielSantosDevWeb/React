import logo from './logo.svg';
import './App.css';
import SubTitulo from './components/SubTitulo';

function App() {

  const soma = (n1 , n2)=> {
    return `o resultado eh ${n1 + n2}`
  }

  const urlImg = 'https://via.placeholder.com/150'


  return (
    <div className="App">
      <h1>Projeto React</h1>
      <p>Criando meu primeiro Projeto em react</p>

      <h3>Somando numeros</h3>

      <p>{soma(3 , 3)}</p>

      <h3>Adicionando imagens</h3>

      <img src={urlImg}></img>

      < SubTitulo />

    </div>
  );
}

export default App;
