import '../styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS


function Header_() {
  return (
    <div className="App">
     
        <img src={process.env.PUBLIC_URL + '/Positive_Navy.png'} className="App-logo" alt="logo" />
       
        <header className="App-header">
        <div>
          <h1>Información Previa</h1>
          <div className="button-container" aria-label="Enlaces">
            <a href="https://es.wikipedia.org/wiki/N%C3%BAmero_triangular" className="btn btn-primary" target='_blank'>Número Triangular</a>
            <a href="https://es.wikipedia.org/wiki/N%C3%BAmero_primo" className="btn btn-primary" target='_blank'>Numero Primo</a>
            <a href="https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci" className="btn btn-primary" target='_blank'>Sucesión Fibonacci</a>
          </div>
        </div>
     </header>
      
    </div>
  );
}

export default Header_;