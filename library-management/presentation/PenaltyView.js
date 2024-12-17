class PenaltyView {
	constructor(penaltyService) {
		this.penaltyService = penaltyService;
	}

	displayPenalties(userID) {
		const penalties = this.penaltyService.getPenalties(userID);
		console.log(penalties);
	}
}
