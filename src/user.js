import './user.css'
import './sass-example.sass'
import './scss-example.scss'
export default class User{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return `Hi ${this.firstName} ${this.lastName}`;
    }
}