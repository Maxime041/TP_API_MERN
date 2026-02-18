import mongoose from "mongoose";
import Movie from "./models/movie.model";
import { createMovie, getMovies, getMovieById } from "./controllers/movie.controller";

// Remplace <password> par ton vrai mot de passe MongoDB Atlas
const uri = "mongodb+srv://admin:la94LK6PeN7xWM7L@mernstarter.tsgvnpz.mongodb.net/?appName=MernStarter";

async function testConnection() {
  try {
    console.log("Tentative de connexion...");

    // 1️. Connexion à MongoDB Atlas
    await mongoose.connect(uri);
    console.log("Connexion réussie à MongoDB Atlas !");

    // 4️. Création et sauvegarde d'un document
    const myMovie = new Movie({ title: "Zizou", director: "Jean Dupont", year: 2020, genre: "Comédie", duration: 120 });
    await myMovie.save();

    await createMovie(
        { body: { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Science Fiction", duration: 148 } } as any,
        {
            status: (code: number) => ({
                json: (data: any) => console.log("Film créé :", data),
            }),
        } as any
    );

    await getMovies(
        {} as any,
        {
            status: (code: number) => ({
                json: (data: any) => console.log("Films récupérés :", data),
            }),
        } as any
    );

    await getMovieById(
        { params: { id: myMovie._id } } as any,
        {
            status: (code: number) => ({
                json: (data: any) => console.log("Film récupéré par ID :", data),
            }),
        } as any
    );




    
  } catch (error) {
    console.error("Erreur :", error);
  } finally {
    // 5️. Fermeture propre de la connexion
    await mongoose.disconnect();
    console.log("Fermeture de la connexion.");
  }
}

// Exécution de la fonction
testConnection();
