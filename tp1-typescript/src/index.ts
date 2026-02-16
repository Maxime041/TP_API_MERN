// Exercice 1 : Les Primitifs et l'Inférence

let nom : string = "Maxime";
let age : number = 21;
let estAdherent : boolean = true;

// age = "25"; // Erreur de type : Type 'string' is not assignable to type 'number'.

let score = 10; // let score : number 

// Exercice 2 : Tableaux et Tuples

let sports : string[] = ["Football", "Basketball", "Tennis"];
let pannier : [string, number] = ["Pomme", 3];

let reponse: [number, string] = [200, "OK"];

// Exercice 3 : Les Fonctions

function calculerRemise(prix: number): number {
    return prix * 0.2;
}

console.log(calculerRemise(100));

function saluer(prenom: string, titre? : string): string {
    if(titre == "M")
        return `Bonjour Monsieur ${prenom}`;
    else if(titre == "Mme")
        return `Bonjour Madame ${prenom}`;
    else
        return `Bonjour ${prenom}`;
}

console.log(saluer("Maxime", "M"));

function formaterID(id: number | string): string {
    return `ID: ${id.toString()}`;
}

// 5. Challenge : Modélisation (Préparation Projet Final)

interface IEquipement {
    id: number;
    nom: string;
    categorie: string;
    disponible: boolean;
}


function afficherInventaire(equipements: IEquipement[]): void {
    equipements.forEach(equipement => {
        if (equipement.disponible) {
            console.log(`ID: ${equipement.id}, Nom: ${equipement.nom}, Catégorie: ${equipement.categorie}, Disponible: ${equipement.disponible}`);
        }
    });
}

const inventaire: IEquipement[] = [
    { id: 1, nom: "Chaise", categorie: "Mobilier", disponible: true },
    { id: 2, nom: "Table", categorie: "Mobilier", disponible: false },
    { id: 3, nom: "Ordinateur", categorie: "Electronique", disponible: true },
];

afficherInventaire(inventaire);