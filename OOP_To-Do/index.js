function Person(first, last, age) {
 this.firstName = first;
 this.lastName = last;
 this.age = age;
 this.fullName = function () {
  return this.firstName + " " + this.lastName;
 };
}

const sumit = new Person("sumit", "saha", 35);
const rahim = new Person("rahim", "khan", 30);

console.log(sumit);
console.log((sumit.country = "Bangladesh"));
console.log(sumit);
console.log(rahim);

class Book {
 constructor(title, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
 }

 getSummary() {
  return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
 }
}

class Library {
 constructor() {
  this.books = [];
 }

 addBook(book) {
  this.books.push(book);
 }

 removeBook(title) {
  this.books = this.books.filter((book) => book.title !== title);
 }

 listBooks() {
  this.books.forEach((book) => console.log(book.getSummary()));
 }
}

const book1 = new Book("Atomic Habits", "James Clear", 2018);
const book2 = new Book("The Alchemist", "Paulo Coelho", 1988);

console.log(book1);
console.log(Book.prototype.title);

const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.listBooks();
myLibrary.removeBook("Atomic Habits");
myLibrary.listBooks();

class Car {
 constructor(brand) {
  this.carname = brand;
 }
 present() {
  return "I have a " + this.carname;
 }
}

class Model extends Car({
 constructor(brand, mod) {
  super(brand);
  this.model = mod;
 },
 show() {
  return this.present() + " , it is a " + this.model;
 },
}) {}

class Animal {
 constructor(name, age) {
  this.name = name;
  this.age = age;
 }
}

class Lion extends Animal {
 constructor(name, age) {
  super(name, age);
 }
 makeSound() {
  return ` The ${this.name} make Roar sound`;
 }
}

const lion = new Lion("Lion", 10);
console.log(lion.makeSound());
