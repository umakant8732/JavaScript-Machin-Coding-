/**
 * MODULE SCENARIO 2: DEFAULT EXPORTS
 * File: 03-user-service.js
 * 
 * Concept:
 * A file can have ONLY ONE default export.
 * Consumers can import it WITHOUT curly braces and can assign ANY custom name to it.
 */

class UserService {
    constructor() {
        this.users = [
            { id: 1, name: "Rahul", role: "Admin" },
            { id: 2, name: "Jane", role: "Developer" }
        ];
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
}

// ES6 Default Export Syntax:
// export default UserService;

// Node.js CommonJS compatible export for execution:
module.exports = UserService;
