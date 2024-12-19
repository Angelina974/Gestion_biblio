# Architecture en couches - Atelier

Pour cet atelier, nous avons opté pour une répartition en 3 couches : UI, Business et Data. L'avantage de 
l'architecture en couches est son évolutivité simplifée due au fait que chaque couche a un rôle précis.

### 1. UI Layer (dossier presentation)
   La couche **UI** est responsable de l'affichage des données et de l'interaction avec l'utilisateur. Elle ne 
   contient aucune logique métier, elle appelle les services pour récupérer ou envoyer les informations nécessaires, 
   c'est un tampon entre l'utilisateur et l'application.

### Fichiers :

**[BookView.js](presentation/BookView.js) :**
Affiche les informations sur les livres (liste des livres, détails d'un livre). Communique avec le BookManager.

**[UserView.js](presentation/UserView.js) :**
Affiche les informations sur les utilisateurs (liste des utilisateurs, profil d'un utilisateur). Communique avec le 
UserManager.

**[BorrowView.js](presentation/BorrowView.js) :**
Affiche les emprunts (livres empruntés par un utilisateur, création d'un emprunt, retour d'un livre). 
Communique avec le BorrowManager.

**[PenaltyView.js](presentation/PenaltyView.js) :**
Affiche les pénalités (affichage des pénalités, paiement). Communique avec le PenaltyManager.


### 2. Business Layer (dossier business)
   La couche **Business** contient la logique métier de l'application. Elle applique 
   les règles spécifiques. Cette couche est intermédiaire entre la couche présentation et la couche données.

#### Fichiers :

**[BookManager.js](business/BookManager.js) :**
Contient la logique pour gérer les livres (ajout, modification, suppression, vérification de disponibilité). Communique avec le BookRepository.

**[UserManager.js](business/UserManager.js) :**
Gère la logique liée aux utilisateurs (ajouter, supprimer, rechercher un utilisateur). Communique avec le 
UserRepository.

**[BorrowManager.js](business/BorrowManager.js) :**
Traite les emprunts (vérifie si un livre est disponible, vérifie si un utilisateur peut emprunter un livre, 
enregistre un emprunt, retourne un livre). Communique avec le BorrowRepository et BookRepository.

**[PenaltyManager.js](business/PenaltyManager.js) :**
Contient la logique pour calculer et gérer les pénalités (retard de retour des livres). Communique avec PenaltyRepository.


### 3. Data Layer (dossier orm)
   La couche **Data** contient les modèles de données traitées et l'orm responsable de la gestion des accès aux 
   données. Elle interagit directement avec la source de stockage, et expose des méthodes pour récupérer, insérer, 
   mettre à jour ou supprimer les données.

#### Fichiers :

**[BookRepository.js](data/orm/BookRepository.js) :**
Contient les méthodes pour accéder aux livres dans la base de données (obtenir un livre par ID, ajouter, supprimer, etc.).

**[UserRepository.js](data/orm/UserRepository.js) :**
Contient les méthodes pour accéder aux utilisateurs (ajouter un utilisateur, trouver par ID, supprimer).

**[BorrowRepository.js](data/orm/BorrowRepository.js) :**
Contient les méthodes pour accéder aux données des emprunts (enregistrer un emprunt, obtenir les emprunts par 
utilisateur).

**[PenaltyRepository.js](data/orm/PenaltyRepository.js) :**
Contient les méthodes pour accéder aux données des pénalités (récupération, mise à jour, suppression des pénalités).


### Exemple : Enregistrer un emprunt 

- Pour enregistrer un emprunt, BorrowView appelle BorrowManager.
- Ensuite BorrowManager appelle BookRepository pour vérifier si le livre est disponible.
- Ensuite BorrowManager appelle UserRepository pour vérifier si l'utilisateur a emprunté moins de 3 livres.
- Si les deux conditions ci-dessus sont remplies, BorrowManager appelle BorrowRepository pour enregistrer l'emprunt.
- BorrowRepository enregistre l'emprunt dans la base de données et remonte l'information à BorrowManager.
- BorrowManager remonte une confirmation à BorrowView pour affichage.


## Réalisé par : 
- **CHAMANIER Enzo** 
- **GROSSI Julia** 
- **VITRAT Clément** 
- **LASSAL shun** 
- **FREGONESE Tom** 
- **CHATELAIN Dylan** 
- **LAFOSSE Manon**