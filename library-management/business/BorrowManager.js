class BorrowManager {
	constructor(loanRepository, bookRepository) {
		// On initialise les objets qui gères les les prêts des livres, et un objet qui gères les livres
		// ils vont ensuite être retournés dans de nouvelles méthodes pour être utilisés
	}

	getLoansByUser(userID) {
		// cette fonction va utiliser l'id de l'user et 'loanRepository' pour ressortir les prêts de l'utilisateur
	}

	saveLoan(loan) {
		// cette fonction va enregistrer un nouveau prêt avec loanRepository, et l'objet loan
	}
}
