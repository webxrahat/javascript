// Create an object with keys as city names and values as their populations. Write a function that finds and returns the city with the largest population.

// const obj = {
//  Dhaka: 1000,
//  jashore: 1200,
//  khulna: 1500,
//  bogura: 1100,
// };

// function largestPopulation(objects) {
//  let maxCity = "";
//  let maxPopulation = 0;
//  for (let x in objects) {
//   if (objects[x] > maxPopulation) {
//    maxPopulation = objects[x];
//    console.log(maxPopulation);
//    maxCity = x;
//   }
//  }
//  return maxCity;
// }

// const ans = largestPopulation(obj);
// console.log(ans);

// const arr = [1, 25, 5, 8];

// const reducer = (acc, curIdx) => acc + curIdx;

// const result = arr.reduce(reducer, 1);

// console.log(result);

const users = [
  {
    id: 1,
    name: "Alice Rahman",
    email: "alice.rahman@example.com",
    age: 28,
    role: "Admin",
    address: {
      state: "Jashore",
      village: "Tabariya",
      lane: "kazi molla road",
      word: 1,
    },
    expense: ["100", "200", "300", "500", "700", "1230"],
  },
  {
    id: 2,
    name: "Bilal Hossain",
    email: "bilal.hossain@example.com",
    age: 32,
    role: "Editor",
    address: {
      state: "Jashore",
      village: "Chanchra",
      lane: "shahid minar road",
      word: 3,
    },
    expense: ["150", "180", "250", "400", "900"],
  },
  {
    id: 3,
    name: "Chowdhury Imran",
    email: "imran.chowdhury@example.com",
    age: 25,
    role: "Subscriber",
    address: {
      state: "Jashore",
      village: "Monihar",
      lane: "rail station road",
      word: 2,
    },
    expense: ["120", "160", "210", "310", "450"],
  },
  {
    id: 4,
    name: "Dipa Akter",
    email: "dipa.akter@example.com",
    age: 30,
    role: "Author",
    address: {
      state: "Jashore",
      village: "Kotchandpur",
      lane: "college para",
      word: 4,
    },
    expense: ["200", "340", "500", "600"],
  },
  {
    id: 5,
    name: "Emon Karim",
    email: "emon.karim@example.com",
    age: 27,
    role: "Moderator",
    address: {
      state: "Jashore",
      village: "Basupara",
      lane: "mosjid goli",
      word: 5,
    },
    expense: ["100", "90", "300", "550", "1200"],
  },
];

const data = users.filter((user) => user.id === 2);

console.log(data);
