const express = require("express");
const app = express();
const db = require("./config/connection");
const routes = require("./controller");

const PORT = 5000;

const cors = require("cors");

app.use(cors());
app.use(routes);
app.use(express.json());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log("app listening on 5000");
  });
});

// const data = [
//     {
//       title: 'Good Omens',
//       authors: [
//         { name: 'Neil Gaiman', featured: true },
//         { name: 'Terry Pratchett', featured: true },
//       ],
//       information: { ISBN: 9780425132159, price: 10, total_in_stock: 10 },
//     },
//     {
//       title: 'Heads You Lose',
//       authors: [
//         { name: 'Lisa Lutz', featured: false },
//         { name: 'David Hayward', featured: false },
//       ],
//       information: { ISBN: 9780399157400, price: 20, total_in_stock: 8 },
//     },
//     {
//       title: 'Between the Lines',
//       authors: [
//         { name: 'Jodi Picoult', featured: true },
//         { name: 'Samantha Van Leer', featured: false },
//       ],
//       information: { ISBN: 9781451635751, price: 5, total_in_stock: 5 },
//     },
//   ];

//TO DO
//finish watching the one toutorial about react
//make a login page that takes user input, make this with react

//save the data to a mongo db database
