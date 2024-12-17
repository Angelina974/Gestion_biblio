class BorrowView {
	constructor(borrowService) {
		this.borrowService = borrowService;
	}

	requestLoan(userID, bookID) {
		try {
			this.borrowService.registerLoan(userID, bookID);
			console.log("Loan registered successfully.");
		} catch (exception) {
			console.log("Error: " + exception.message);
		}
	}
}
