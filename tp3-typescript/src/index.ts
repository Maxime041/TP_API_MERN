import { mockUsers, fetchUtilisateurs } from "./service";

console.log(`Nombre d'utilisateurs : ${mockUsers.length}`);

// Une fonction qui utilise 'await' DOIT être marquée 'async'
async function main() {
    console.log("Chargement des données...");
    const users = await fetchUtilisateurs();
    console.log("Utilisateurs reçus :", users);
}
main();