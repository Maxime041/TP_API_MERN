//
import { Utilisateur } from "./types";

// TODO: Créez un tableau de 3 utilisateurs

export const mockUsers: Utilisateur[] = [
{ id: 1, nom: "Alice", email: "alice@test.com" },
{ id: 2, nom: "Bob", email: "bob@test.com" },
{ id: 3, nom: "Charlie", email: "charlie@test.com" }
];

// Notez le type de retour : on promet de renvoyer un tableau d'utilisateurs plus tard
/*export function fetchUtilisateurs(): Promise<Utilisateur[]> {
    return new Promise((resolve) => {
        // setTimeout simule la lenteur du réseau (2 secondes)
        setTimeout(() => {
            console.log("... Données récupérées !");
            resolve(mockUsers); // La promesse est tenue, on envoie les données
        }, 2000);
    });
}*/

export function fetchUtilisateurs(): Promise<Utilisateur[]> {
    return new Promise((resolve, reject) => { // Notez l'ajout de 'reject'
        setTimeout(() => {
            const success = Math.random() > 0.5; // 1 chance sur 2
            if (success) {
            resolve(mockUsers);
            } else {
            // TODO: Appelez reject() avec un message d'erreur (string)
            reject("Erreur lors de la récupération des utilisateurs");
            }
        }, 1000);
    });
}