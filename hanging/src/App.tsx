import { useState } from 'react';
import { letters } from './helpers/letters'
import './App.css';
import { HangImage } from './components/HangImage';


function App() {
    
    const [word] = useState('COMPUTADORA')
    const [hiddenWord] = useState('_ '.repeat (word.length));
    const [attempts, setAttempts] = useState(0);


    const checkLetter = (letter: string) => {
      console.log(letter);
      setAttempts (Math.min(attempts + 1, 9));
    }

  return (
      <div className="app">
            
            {/* Imágenes */}
            <HangImage imageNumber={ attempts } />

            {/* Palabra oculta */}
            <h3>{hiddenWord}</h3>
            
            {/* Contador de intentos */}
            <h3>Intentos: {attempts} </h3>   
           
            {/* Botones */}
            {
              letters.map( (letter) => (
                <button
                onClick={() => checkLetter(letter)}
                  key={ letter }>
                    { letter }
                </button>
              ) )
            }  
     
    
      </div>
  )        
};

export default App
