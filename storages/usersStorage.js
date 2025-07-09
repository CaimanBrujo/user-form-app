class UsersStorage {
  constructor() {
    this.storage = {
      0: {
        id: 0,
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        age: 28,
        bio: "Frontend developer who loves React and cats.",
      },
      1: {
        id: 1,
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob@example.com",
        age: 35,
        bio: "Backend engineer and coffee enthusiast.",
      },
      2: {
        id: 2,
        firstName: "Charlie",
        lastName: "Williams",
        email: "charlie@example.com",
        age: 22,
        bio: "Aspiring full-stack dev with a passion for learning.",
      },
    };
    this.id = 3; // Set the next id to 3
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  searchUser(query) {
    const users = Object.values(this.storage);
    return users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }
}

module.exports = new UsersStorage();
