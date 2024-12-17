class BookView {
	constructor(bookService) {
		this.bookService = bookService;
	}

	displayAvailableBooks() {
		const books = this.bookService.listAvailableBooks();
		this.display(books);
	}

	display(books) {
		console.log(books);
	}
}
