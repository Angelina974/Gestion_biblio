class BorrowRepository {
	constructor() {
		this.borrows = []; // Simulate a database
	}

	getByUser(userID) {
		return this.borrows.filter((borrow) => borrow.userID === userID);
	}

	save(borrow) {
		this.borrows.push(borrow);
	}
}
