// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
// Un composant React est juste une fonction qui retourne du "HTML"
const Home = () => <h2>Page d'accueil</h2>;
const Library = () => <h2>Ma Bibliothèque</h2>;

function App() {
return (
  <div>
    <nav style={{ padding: '20px', background: '#eee' }}>
      {/* TODO : Utilisez le composant Link pour naviguer sans rechargement */}
      <Link to="/">Accueil</Link> | <Link to="/library">Livres</Link>
    </nav>
    <main style={{ padding: '20px' }}>
      {/* TODO : Utilisez Routes comme conteneur et Route pour chaque chemin */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      {/* CHALLENGE : Comment gérer une erreur 404 (URL inconnue) ? */}
      <Route path="*" element={<h2>Erreur 404 : Page introuvable</h2>} />
      </Routes>
    </main>
  </div>
);
}

export default App;
