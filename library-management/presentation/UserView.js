class UserView {
	constructor(userService) {
		this.userService = userService;
	}

	displayUserDetails(userID) {
		const user = this.userService.getUser(userID);
		this.display(user);
	}

	display(user) {
		console.log(user);
	}
}
