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