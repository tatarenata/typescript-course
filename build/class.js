"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
// public = bisa diakses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class itu sendiri.
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = " ";
        this.phone = phone;
    }
    static getNameRole() {
        return "hei";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(value) {
        if (value.length < 5) {
            this.email = "Email salah";
        }
        else {
            this.email = value;
        }
        this.email = value;
    }
    get email() {
        return this.email;
    }
}
Admin.getRoleName = "Admin";
let admin = Admin.getNameRole;
console.log(admin);
