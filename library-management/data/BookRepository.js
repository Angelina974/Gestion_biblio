class BookRepository {
	constructor() {
		this.books = []; // Simulate a database
	}

	get(bookID) {
		return this.books.find((book) => book.bookID === bookID);
	}

	update(book) {
		const index = this.books.findIndex((b) => b.bookID === book.bookID);
		if (index !== -1) {
			this.books[index] = book;
		}
	}

	listAvailable() {
		return this.books.filter((book) => !book.isBorrowed);
	}
}
