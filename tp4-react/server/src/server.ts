import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3001; // Port 3001 pour ne pas gêner React (5173)
// --- MIDDLEWARES ---
// TODO : Ajoutez les deux middlewares essentiels :
// 1. Celui pour autoriser les requêtes externes (CORS)
// 2. Celui pour lire le JSON dans le body des requêtes
app.use(cors());
app.use(express.json());
// --- DONNÉES ---
// Simulation de base de données en mémoire
let books = [
{ id: 1, title: 'Express pour les nuls', author: 'Node JS' }
];
// --- ROUTES ---
// Route de test
app.get('/', (req, res) => {
    res.send('API Library v1.0 is running...');
});
// TODO 1 : Route GET pour /api/books
// Cette route doit renvoyer le tableau 'books' au format JSON
app.get('/api/books', (req, res) => {
    res.json(books);
});
// TODO 2 : Route POST pour /api/books
// Cette route doit :
// 1. Récupérer le titre et l'auteur dans le body de la requête
// 2. Créer un nouvel objet livre avec un ID unique (ex: Date.now())
// 3. Ajouter ce livre au tableau 'books'
// 4. Renvoyer le livre créé avec le code HTTP 201
app.post('/api/books', (req, res) => {
// A vous de coder la logique ici...
    const { title, author } = req.body;
    const newBook = { id: Date.now(), title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// TODO 3 : Route DELETE pour /api/books/:id
app.delete('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
        books.splice(index, 1);
        res.status(204).send(); // No Content
    } else {
        res.status(404).json({ message: 'Livre non trouvé' });
    }
});
// --- DÉMARRAGE ---
// TODO : Lancez le serveur sur le port défini
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});