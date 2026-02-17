// src/App.tsx
import { useState } from 'react';
// Un composant React est juste une fonction qui retourne du "HTML"
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }


// Cette syntaxe (HTML dans du JS), c'est du JSX, plus précisément TSX ici.
return (
  <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
    <h1>Compteur Interactif</h1>
    {/* TODO : Affichez la variable du state ici */}
    <p style={{
      fontSize: '40px',
      fontWeight: 'bold',
      // TODO : Si count est inférieur à 0, la couleur doit être 'red', sinon 'black'
      color: count < 0 ? 'red' : 'black'
      }}>
      {count}
    </p>
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      {/* TODO : Liez la fonction decrement au clic */}
      <button onClick={decrement} style={{ padding: '10px 20px' }}>
      - Diminuer
      </button>
      {/* TODO : Liez la fonction increment au clic */}
      <button onClick={increment} style={{ padding: '10px 20px' }}>
      + Augmenter
      </button>
    </div>
  </div>
);
}
export default App;
