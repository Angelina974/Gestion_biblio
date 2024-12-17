class BookManager {
	constructor(bookRepository) {
		this.bookRepository = bookRepository;
	}

	getBook(bookID) {
		// return this.bookRepository.get(bookID);
	}

	updateBook(book) {
		this.bookRepository.update(book);
	}

	listAvailableBooks() {
		return this.bookRepository.listAvailable();
	}
}
