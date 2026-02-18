import mongoose from "mongoose";

// 🔐 Remplace <password> par ton vrai mot de passe MongoDB Atlas
const uri = "mongodb+srv://admin:la94LK6PeN7xWM7L@mernstarter.tsgvnpz.mongodb.net/?appName=MernStarter";

async function testConnection() {
  try {
    console.log("Tentative de connexion...");

    // 1️. Connexion à MongoDB Atlas
    await mongoose.connect(uri);
    console.log("Connexion réussie à MongoDB Atlas !");

    // 2. Définition du schéma
    const CatSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
    });

    // 3️. Création du modèle
    const Cat = mongoose.model("Cat", CatSchema);

    // 4️. Création et sauvegarde d'un document
    const myCat = new Cat({ name: "Zizou" });
    await myCat.save();

    console.log("Donnée sauvegardée : Un chat nommé Zizou a été ajouté.");
  } catch (error) {
    console.error("Erreur :");
  } finally {
    // 5️. Fermeture propre de la connexion
    await mongoose.disconnect();
    console.log("Fermeture de la connexion.");
  }
}

// Exécution de la fonction
testConnection();
