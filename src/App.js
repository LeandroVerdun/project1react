import './App.css';
import Testimonio from './Red-componentes/testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Team RWBY</h1>
        <Testimonio
        nombre='Ruby'
        apellido='Rose'
        imagen='Ruby Rose.jpe'
        sobrenombre='Little Red'
        arma= 'Crescent Rose'
        testimonio='Estoy dispuesto a hacer todo lo que pueda para ayudar porque confío en ti. Pero, ¿por qué no puedes confiar en mí?' />
        <Testimonio
        nombre='Weiss'
        apellido='Schnee'
        imagen='00a087dbbecf695007b50c33ad9a1d45.png'
        sobrenombre='Ice Queen'
        arma= 'Myrtenaster'
        testimonio='Las emociones pueden darte fuerza, pero nunca debes dejar que te dominen' />
        <Testimonio
        nombre='Blake'
        apellido='Belladonna'
        imagen='avatars-000191077024-mb09aw-t500x500.jpg'
        sobrenombre='Kitty'
        arma= 'Gambol Shroud'
        testimonio='Soy un gato' />
        <Testimonio
        nombre='Yang'
        apellido='Xiao Long'
        imagen='yang-xiao-long.webp'
        sobrenombre='Sunny Little Dragon'
        arma= 'Ember Celica'
        testimonio='Soy un buscador de emociones. Quiero viajar por el mundo y envolverme en tantas aventuras locas como pueda. Y si ayudo a la gente en el camino, será incluso mejor. Es un ganar-ganar, ¿sabes?' />
      </div>
      
      
    </div>
  );
}

export default App;
