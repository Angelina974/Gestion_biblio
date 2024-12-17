class PenaltyRepository {
	constructor() {
		this.penalties = []; // Simulate a database
	}

	getByUser(userID) {
		return this.penalties.filter((penalty) => penalty.userID === userID);
	}

	save(userID, amount) {
		this.penalties.push({ userID, amount });
	}
}
