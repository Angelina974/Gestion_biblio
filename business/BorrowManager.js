class BorrowManager {

	getLoansByUser(userID) {
		// Renvoie les prêts de l'utilisateur via son ID
	}

	requestLoan(userID, bookID) {
		// Vérifie si l'utilisateur peut emprunter un nouveau livre (livres empruntés non rendus < 3)
		// Vérifie si le livre est disponible (non emprunté)
		// Enregistre l'emprunt avec 'saveLoan'
	}

	saveLoan(loan) {
		// Enregistre un nouveau prêt avec loanRepository, et l'objet loan
	}
}
