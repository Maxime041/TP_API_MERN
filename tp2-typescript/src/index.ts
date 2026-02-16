//  Exercice 1 : Les Enums (Énumérations)

enum StatutCommande {
    EnAttente,
    Expediee,
    Livree
}

interface Commande{
    id: number;
    statut: StatutCommande;
}

function afficherEtat(commande: Commande): void {
    if (commande.statut === StatutCommande.Livree) {
        console.log(`Colis reçu !`);
    }
    else {
        console.log(`En cours d'acheminement`);
    }
}

afficherEtat({ id: 1, statut: StatutCommande.Livree });
afficherEtat({ id: 2, statut: StatutCommande.Expediee });

// Exercice 2 : Classes et Encapsulation

interface Livre{
    titre: string;
    auteur: string;
}

class Bibliotheque {
    private catalogue: Livre[] = [];

    public ajouterLivre(livre: Livre): void {
        this.catalogue.push(livre);
    }

    public obtenirCatalogue(): Livre[] {
        return this.catalogue;
    }
}

const maBibliotheque = new Bibliotheque();
maBibliotheque.ajouterLivre({ titre: "1984", auteur: "George Orwell" });
maBibliotheque.ajouterLivre({ titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry" });
//console.log(maBibliotheque.catalogue); // Erreur : Propriété 'catalogue' est privée et n'est accessible que dans la classe 'Bibliotheque'.
console.log(maBibliotheque.obtenirCatalogue());

//  Exercice 3 : Introduction aux Génériques ()

class Boite<T> {
    private contenu: T;

    constructor(contenu: T) {
        this.contenu = contenu;
    }

    public regarder(): T {
        return this.contenu;
    }
}

const boiteAString = new Boite<string>("Bonjour");
const boiteANumber = new Boite<number>(42);
console.log(boiteAString.regarder());
console.log(boiteANumber.regarder());

// Exercice 4 : Les "Utility Types" (Bonus)

function mettreAJourLivre(livre : Livre, modification: Partial<Livre>): Livre {
    return { ...livre, ...modification };
}

const livreOriginal: Livre = { titre: "1900", auteur: "Livre de maxime" };

const livreModifie = mettreAJourLivre(livreOriginal, { titre: "test" });
console.log(livreModifie);