class PenaltyManager {
	constructor(penaltyRepository) {
		this.penaltyRepository = penaltyRepository;
	}

	calculatePenalty(overdueDays) {
		return overdueDays * 1; // 1€ per overdue day
	}

	savePenalty(userID, amount) {
		this.penaltyRepository.save(userID, amount);
	}
}
