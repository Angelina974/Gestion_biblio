Architecture en couches - Atelier

Réalisé par : CHAMANIER Enzo, GROSSI Julia, VITRAT Clément, LASSAL shun, FREGONESE Tom, CHATELAIN Dylan, LAFOSSE Manon

Pour ce projet nous avons répartis en couches, l'avantage est d'avoir une architecture qui est modulaire et évolutive, et que chaque couche est un role bien précis qui permet une maintenance plus aisée.

Nous avons séparés cette architecture en couches suivantes :

1. Couche Présentation (le dossier : presentation)
   La couche présentation est responsable de l'affichage des données et de l'interaction avec l'utilisateur. Elle ne contient aucune logique métier : elle appelle les services pour récupérer ou envoyer les informations nécessaires.

Fichiers :

BookView.js :
Affiche les informations sur les livres (liste des livres, détails d'un livre). Interagit avec le BookManager pour récupérer ou mettre à jour les données.

UserView.js :
Affiche les informations sur les utilisateurs (liste des utilisateurs, profil d'un utilisateur). Communique avec le UserManager.

BorrowView.js :
Gère l'affichage des emprunts (livres empruntés par un utilisateur, création d'un emprunt, retour d'un livre). Utilise le BorrowManager.

PenaltyView.js :
Affiche et gère les pénalités (calcul des pénalités, affichage, paiement). Communique avec le PenaltyManager.

2. Couche Métier (le dossier business)
   La couche métier contient toute la logique métier de l'application. Elle traite les données et applique les règles métiers spécifiques. Cette couche est intermédiaire entre la couche présentation et la couche données.

Fichiers :

BookManager.js :
Contient la logique pour gérer les livres (ajout, modification, suppression, vérification de disponibilité). Communique avec le BookRepository.

UserManager.js :
Gère la logique liée aux utilisateurs (ajouter, supprimer, rechercher un utilisateur). Fait appel au UserRepository.

BorrowManager.js :
Traite les emprunts (vérifie si un livre est disponible, enregistre un emprunt, retourne un livre). S'appuie sur BorrowRepository et BookRepository.

PenaltyManager.js :
Contient la logique pour calculer et gérer les pénalités (retard de retour des livres). Utilise PenaltyRepository.

3. Couche Données (le dossier data)
   La couche données est responsable de la gestion des accès aux données. Elle interagit directement avec la base de données ou une source de stockage, et expose des méthodes pour récupérer, insérer, mettre à jour ou supprimer les données.

Fichiers :
BookRepository.js :
Contient les méthodes pour accéder aux livres dans la base de données (obtenir un livre par ID, ajouter, supprimer, etc.).

UserRepository.js :
Fournit les opérations pour accéder aux utilisateurs (ajouter un utilisateur, trouver par ID, supprimer).

BorrowRepository.js :
Gère l'accès aux données des emprunts (enregistrer un emprunt, obtenir les emprunts par utilisateur).

PenaltyRepository.js :
Interagit avec les données des pénalités (calcul, mise à jour, suppression des pénalités).

4. Couche Services (le dossier services)
   La couche services permet d'organiser les interactions entre les managers de la couche métier lorsqu'une fonctionnalité nécessite plusieurs étapes complexes. Elle sert de point central pour certaines fonctionnalités globales.

Fichiers :

LibraryService.js :
Coordonne les opérations générales de la bibliothèque (ex. gérer un emprunt complet : vérifier le livre, enregistrer l'emprunt, et mettre à jour la disponibilité du livre).

PenaltyService.js :
Gère les opérations globales liées aux pénalités (calculer les pénalités pour plusieurs utilisateurs, apurer les pénalités).

5. Couche Modèles (le dossier models)
   La couche modèles contient les entités métiers sous forme d'objets. Ces entités représentent les données de base utilisées dans l'application.

Fichiers :

Book.js :
Modèle représentant un livre avec ses propriétés (ex. titre, auteur, statut de disponibilité).

User.js :
Modèle représentant un utilisateur avec ses informations (ex. nom, identifiant, nombre de livres empruntés).

Borrow.js :
Modèle représentant un emprunt, contenant les liens entre un utilisateur et un livre, ainsi que les dates d'emprunt/retour.

Penalty.js :
Modèle représentant une pénalité avec les détails du retard (ex. montant, utilisateur concerné, statut payé/non payé).

Prenons un exemple :

Enregistrer un emprunt et vérifier si le livre est disponible

BorrowView appelle BorrowManager pour enregistrer un emprunt.
Ensuite BorrowManager vérifie si le livre est disponible via BookRepository.
Si le livre est disponible, BorrowManager enregistre l'emprunt dans BorrowRepository et met à jour le statut du livre dans BookRepository.
Une confirmation est renvoyée à la couche présentation pour affichage.
