class UserProfile {
    constructor() {
        // Initialize with predefined dummy users
        this.users = {
            'user1': {
                name: 'John Doe',
                department: 'Sales',
                userId: '001',
                nextPayDay: '2024-07-01',
                accessLevel: 'admin',
                password: 'hashed_password1' // Dummy hashed password
            },
            'user2': {
                name: 'Jane Smith',
                department: 'Marketing',
                userId: '002',
                nextPayDay: '2024-07-15',
                accessLevel: 'user',
                password: 'hashed_password2' // Dummy hashed password
            }
        };
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
