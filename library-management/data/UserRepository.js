class UserRepository {
	constructor() {
		this.users = []; // Simulate a database
	}

	get(userID) {
		return this.users.find((user) => user.userID === userID);
	}
}
