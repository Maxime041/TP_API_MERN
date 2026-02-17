// src/App.tsx
import { useEffect, useState } from 'react';
import BookCard from './components/BookCard';
import { Routes, Route, Link } from 'react-router-dom';
// Un composant React est juste une fonction qui retourne du "HTML"
const myBooks = [
{ id: 1, title: "Le Petit Prince", author: "Saint-Exupéry" },
{ id: 2, title: "1984", author: "George Orwell" },
{ id: 3, title: "L'Étranger", author: "Albert Camus" }
];
const Home = () => {
  const [count, setCount] = useState<number>(
    Number(localStorage.getItem('count')) || 0
  );
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }


  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <div>
      <h2>Page d'accueil</h2>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
};

function Library() {
return (
  <div>
    <h2>Ma Collection</h2>
    <div className="book-list">
        {/* TODO : Utilisez .map() pour transformer le tableau en composants <BookCard /> */}
        {myBooks.map((book) => (
        <BookCard
        key={book.id}
        title={book.title}
        author={book.author}
        />
        ))}
    </div>
  </div>
);
}

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
