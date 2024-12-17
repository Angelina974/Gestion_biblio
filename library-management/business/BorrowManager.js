class BorrowManager {
	constructor(loanRepository, bookRepository) {
		this.loanRepository = loanRepository;
		this.bookRepository = bookRepository;
	}

	getLoansByUser(userID) {
		return this.loanRepository.getByUser(userID);
	}

	saveLoan(loan) {
		this.loanRepository.save(loan);
	}
}
