import React, { useState, useEffect } from 'react';
import './App.css'; //styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import Header_ from './components/Header_.jsx'; // componente header
import SerieCalculator from './components/Form_serie.jsx'; // componente de formulario
import Calculator from './components/Calculator.jsx'; //componente que hace los calculos


function App() {
  const [showModal, setShowModal] = useState(false); // para controlar el estado del botón "Iniciar serie-- se inicia el false"
  const [showResultModal_2, setShowResultModal_2] = useState(false); // para controlar la visibilidad del modal de resultados
  const [inputValue, setInputValue] = useState(''); //para controlar el input "N"
  const [calculateClicked, setCalculateClicked] = useState(false); // para controlar si se ha hecho clic en "Calcular Serie"


  //para controlar el modal
  const altertModal = () => { 
    setShowModal(!showModal);
  };

  // para escuchar los eventos/cambios del input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  

 // para manejar el clic y dar eventos (en este caso  de dar clicl en "calcular la Serie")
const handleCalculateClick = () => {
  console.log('Número introducido:', inputValue);
  setCalculateClicked(true);
  
  //setShowResultModal_2(true); // muestra el modal de resultados
  console.log('calculateClicked:', calculateClicked);
  setShowModal(false); // cierra el primer modal
};


  // Limpiar el valor del input cuando el modal se cierra
  useEffect(() => {
    if (showModal) {
      setInputValue('');
    }
  }, [showModal]);

  // Limpiar el valor del input cuando el modal se cierra
  // useEffect(() => {
  //   if (!showResultModal_2) {
  //     setInputValue('');
  //   }
  // }, [showResultModal_2]);


  return (
    <div className="App">
      <Header_ />

      <button onClick={altertModal} className="btn btn-warning" style={{ width: '20%' }}>Comenzar Serie</button>
      <Calculator inputValue={inputValue} calculateClicked={calculateClicked} />
      
      {showModal && (
        <div className="modal" role="dialog" style={{ display: 'block', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" style={{ textAlign: 'center' }}>Introduce el número (N)</h4>
              </div>
              <div className="modal-body">
                <SerieCalculator inputValue={inputValue} onInputChange={handleInputChange} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleCalculateClick}>Calcular serie</button>
                <button type="button" className="btn btn-danger" onClick={altertModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Una segunda opc para mostrat los resultados*/}
      {/* Modal de resultados */} 
      {/* {showResultModal_2 && (
        <div className="modal" role="dialog" style={{ display: 'block', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" style={{ textAlign: 'center' }}>Resultados</h4>
              </div>
              <div className="modal-body">
              <Calculator inputValue={inputValue} calculateClicked={calculateClicked} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={() => setShowResultModal_2(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;