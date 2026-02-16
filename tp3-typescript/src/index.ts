import { mockUsers, fetchUtilisateurs } from "./service";

console.log(`Nombre d'utilisateurs : ${mockUsers.length}`);

// Une fonction qui utilise 'await' DOIT être marquée 'async'
/*async function main() {
    console.log("Chargement des données...");
    const users = await fetchUtilisateurs();
    console.log("Utilisateurs reçus :", users);
}*/

async function main() {
try {
        console.log("Tentative de connexion...");
        const users = await fetchUtilisateurs();
        console.log(users);
    } 
    catch (error) {
        console.log("error :", error);
    }
}

main();