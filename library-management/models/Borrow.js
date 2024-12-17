class Borrow {
	constructor(userID, bookID, borrowDate) {
		this.userID = userID;
		this.bookID = bookID;
		this.borrowDate = borrowDate;
		this.returnDate = null;
	}

	returnBook() {
		this.returnDate = Date.now();
	}
}
