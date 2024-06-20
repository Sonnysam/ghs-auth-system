class UserProfile {
    constructor() {
        this.users = {};
    }

    addUser(userAddress, name, department, userId, nextPayDay, accessLevel, password) {
        if (this.users[userAddress]) {
            throw new Error('User already exists.');
        }

        this.users[userAddress] = { name, department, userId, nextPayDay, accessLevel, password };
        return this.users[userAddress];
    }

    updateUser(userAddress, name, department, nextPayDay, accessLevel) {
        if (!this.users[userAddress]) {
            throw new Error('User does not exist.');
        }

        this.users[userAddress] = { ...this.users[userAddress], name, department, nextPayDay, accessLevel };
        return this.users[userAddress];
    }

    getUser(userAddress) {
        if (!this.users[userAddress]) {
            throw new Error('User does not exist.');
        }

        return this.users[userAddress];
    }
}

module.exports = UserProfile;
