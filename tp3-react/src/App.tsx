// src/App.tsx
// Un composant React est juste une fonction qui retourne du "HTML"
function App() {

  const prenom = "Maxime";
// Cette syntaxe (HTML dans du JS), c'est du JSX, plus précisément TSX ici.
return (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Hello {prenom}</h1>
    <p>Mon premier composant React fonctionne.</p>
  </div>
);
}
export default App;
