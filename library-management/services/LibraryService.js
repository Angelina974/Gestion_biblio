class LibraryService {
	constructor(bookManager, userManager, borrowManager) {
		this.bookManager = bookManager;
		this.userManager = userManager;
		this.borrowManager = borrowManager;
	}

	listAvailableBooks() {
		// Récupère la liste des livres disponibles
	}

	getUser(userID) {
		// Récupère un utilisateur spécifique avec le UserID
	}

	registerBorrow(userID, bookID) {
		// Enregistre un emprunt avec le UserID et le BookID
		// Si le livre n'est pas emprunté et que l'utilisateur n'a pas plus de 3 emprunts
		// Alors on enregistre l'emprunt
		// Sinon, on relève une erreur
	}
}
