class PenaltyService {
	constructor(penaltyManager) {
		this.penaltyManager = penaltyManager;
	}

	getPenalties(userID) {
		return this.penaltyManager.getPenalties(userID);
	}

	calculatePenalty(overdueDays) {
		return this.penaltyManager.calculatePenalty(overdueDays);
	}

	registerPenalty(userID, amount) {
		this.penaltyManager.savePenalty(userID, amount);
	}
}
