// UserProfile.ts
interface User {
    name: string;
    userId: string;
    department: string;
    nextPayDay: string;
}

export default class UserProfile {
    private users: Record<string, User>;

    constructor() {
        // Initialize with predefined dummy users
        this.users = {
            'user1': {
                name: 'John Kumah',
                userId: "a14d",
                department: 'Sales',
                nextPayDay: '2024-07-01'
            },
            'user2': {
                name: 'Jane Smith',
                userId:"aq2n",
                department: 'Marketing',
                nextPayDay: '2024-07-15'
            }
        };
    }

    // Get a user by userId
    getUserByUserId(userId: string): User | undefined {
        return this.users[userId];
    }

    // Add a new user
    addUser(userId: string, name: string, department: string, nextPayDay: string): User {
        if (this.users[userId]) {
            throw new Error('User already exists.');
        }

        const newUser: User = {
            userId: userId, // Assuming userId is provided as a string
            name,
            department,
            nextPayDay
        };

        this.users[userId] = newUser;
        return newUser;
    }

    // Update an existing user
    updateUser(userId: string, name: string, department: string, nextPayDay: string): User {
        if (!this.users[userId]) {
            throw new Error('User does not exist.');
        }

        this.users[userId] = {
            ...this.users[userId],
            name,
            department,
            nextPayDay
        };

        return this.users[userId];
    }

    // Delete a user
    deleteUser(userId: string): void {
        if (!this.users[userId]) {
            throw new Error('User does not exist.');
        }

        delete this.users[userId];
    }

    // Get all users
    getAllUsers(): User[] {
        return Object.values(this.users);
    }
}
