class Book {
	constructor(bookID, title, author, isBorrowed = false) {
		this.bookID = bookID;
		this.title = title;
		this.author = author;
		this.isBorrowed = isBorrowed;
	}
}
