// Getting info using the XHR object

// // 1. Create event listener
// const xhrClick = document.getElementById('btn-xhr');
// const xhrOutput = document.getElementById('output-xhr');
// xhrClick.addEventListener('click', reqListener);
//
//
// // 2. Function that calls xhr object
// function reqListener(){
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
//   xhr.onload = function(){
//     if(this.status === 200){
//       //console.log(this.responseText);
//       const posts = JSON.parse(this.responseText);
//       console.log(posts);
//       const output = document.getElementById('output-xhr');
//       posts.forEach(function(post){
//         // Create list item
//         const li = document.createElement('li');
//         //Add class to li
//         li.classList = 'xhr-li';
//         // Add Text Content to li
//         li.innerHTML = `User ID: ${post.userId}<br>Post ID: ${post.id}<br> ${post.title}`;
//         // Append to list
//         output.appendChild(li);
//
//       });
//     }
//   }
//
//   xhr.send();
// };




// Create XHR Object
// const xhr = new XMLHttpRequest();
// // OPEN - type, url/fileName, async
// xhr.open('GET', 'sample.txt', true);
//
// xhr.onload = function(){
//   if(xhr.status === 200){
//     console.log(this.responseText);
//   }
// }
//
// xhr.send();

//DESTRUCTURING

// let a,b;
// [a,b] = [100,200];
// //Rest pattern
// [a,b,...rest]= [100,200,300,400,500];
//
// ({a,b} = { a:100, b:200, c:300, d:400, e:500 });
// ({a,b, ...rest} = { a:100, b:200, c:300, d:400, e:500 });

// Array Destructuring

// const people = ['John', 'Beth', 'Mike'];
//
// const [person1, person2, person3] = people;
//
// console.log(person1, person2, person3);

//Parse array returned from function
// function getPeople(){
//   return ['John', 'Beth', 'Mike'];
// }
//
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
//
// console.log(person1, person2, person3);


// Object Destructuring

// const person = {
//   name: 'John Doe',
//   age: 32,
//   city: 'Miami',
//   gender: 'Male',
//   sayHello: function(){
//     console.log('hello');
//   }
// }
//
// // New ES6 Destructuring
// const { name, age, city, sayHello } = person;
//
// console.log(name, age, city);
//
// sayHello();



// Creating a new output list

// const txtInput = document.querySelector('.search-text').value;
//
// console.log(txtInput);
//
// const Person = function(fName, lName, age){
//     this.fName = fName;
//     this.lName = lName;
//     this.age = age;
//
//     this.initials = function(){
//       const firstInitial = fName[0];
//       const lastInitial = lName[0];
//       console.log(`${firstInitial} ${lastInitial}`);
//     }
// };
//
//
// const john = new Person('John','Smith',34);
//
// console.log(john.initials());



 //  // //   OBJECT ORIENTED PRACTICE
// const Book = function(title,author,year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
//
// Book.prototype.getSummary = function(){
//   console.log(`${this.title} was writen by ${this.author} in ${this.year}`)
// }
//
// const book1 = new Book('Grapes of Wrath', 'John Steinbeck', 1939);
// const book2 = new Book('The Stranger', 'Albert Camus', 1942);
//
// //console.log(book1.getSummary());
//
// const Magazine = function(title, author, year, month){
//     Book.call(this, title, author, year);
//     this.month = month;
// }
//
// Magazine.prototype = Object.create(Book.prototype);
//
//
// const mag1 = new Magazine('Rolling Stone', 'John Doe', 1994, 'April');
// Magazine.prototype.constructor = Magazine;
//
//
// console.log(mag1);

/// Classes ///

// class Book{
//   constructor(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//
//   getSummary(){
//     return `${this.title} was written in ${this.year} by ${this.author}`
//   }
// }
//
// const book1 = new Book('The Stranger', 'Albert Camus', 1943);
// //console.log(book1.getSummary());
//
// class Magazine extends Book {
//   constructor(title, author, year, month){
//     super(title, author, year);
//     this.month = month;
//   }
// }
//
// const mag1 = new Magazine('mag1','Rolling Stone', 2018, 'October');
//
// console.log(mag1.getSummary());

const arr = [9,8,7,6,5,4,3,2,1];

function addUp(){
  let args = Array.prototype.slice.call(arguments);
  let total = 0;
  // for(let i = 0; i < args.length; i++){
  //   total += args[i];
  // }
  args.forEach((i)=>{total+=i});
  return total;
}

function sortUp(){
  let args = Array.prototype.slice(arguments);

  args.sort((a,b)=>{
    return a-b;
  });
}

function mapUp(){
    let argsNew = Array.from(arguments);
    let total = 0;

    argsNew.map((i) => {
      return argsNew[i];
    });
}

console.log(addUp(1,2,3,44,67,33));
console.log(mapUp(1,2,3,44,67,33));




///
