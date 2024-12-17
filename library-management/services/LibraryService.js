class LibraryService {
	constructor(bookManager, userManager, borrowManager) {
		this.bookManager = bookManager;
		this.userManager = userManager;
		this.borrowManager = borrowManager;
	}

	listAvailableBooks() {
		// Get all available books
	}

	getUser(userID) {
		return this.userManager.getUser(userID);
	}

	registerBorrow(userID, bookID) {
		const user = this.userManager.getUser(userID);
		const book = this.bookManager.getBook(bookID);

		if (!book.isBorrowed && user.Borrows.length < 3) {
			const Borrow = new Borrow(userID, bookID, Date.now());
			this.borrowManager.saveBorrow(Borrow);
			book.isBorrowed = true;
			this.bookManager.updateBook(book);
		} else {
			throw new Error("Borrow cannot be registered.");
		}
	}
}
