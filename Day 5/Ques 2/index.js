class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 0;
        this.courses = [];
    }

    login() {
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out`);
        return this;
    }

}

class Moderator extends User {
    constructor(name, age, email) {
        super(name, age, email);
    }
    addCoins(user) {
        user.luCoins++;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }

    removeCoins(user) {
        user.luCoins--;
        console.log(`${user.name} has ${user.luCoins} coins`);
        return this;
    }
}

class Admin extends Moderator {
    constructor(name, age, email) {
        super(name, age, email);
    }
    addCourse(user, course) {
        user.courses.push(course);
        console.log(`Course ${course} added to user ${user.name}`);
    }

    deleteCourse(user, course) {
        user.courses.splice(user.courses.indexOf(course), 1);
        console.log(`Course ${course} removed to user ${user.name}`);
    }
}

let user1 = new User('Dilip', 25, 'dilip@gmail.com')
let user2 = new User('Krishnan', 24, 'krishnan@gmail.com')

let mod1 = new Moderator('Moderator1', 40, 'mod1@gmail.com')
mod1.addCoins(user1);
mod1.addCoins(user1);
mod1.addCoins(user1);

mod1.addCoins(user2);

mod1.removeCoins(user1);

let admin = new Admin('Admin', 55, 'admin@gmail.com')
admin.addCourse(user1, 'AI-ML')
admin.addCourse(user1, 'Python')

admin.addCourse(user2, 'English')
