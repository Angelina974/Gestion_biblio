class UserManager {
	constructor(userRepository) {
		this.userRepository = userRepository;
	}

	getUser(userID) {
		return this.userRepository.get(userID);
	}
}
