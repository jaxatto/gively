const associations = require("./seeds/01_associations");
const companies = require("./seeds/02_companies");
const volunteers = require("./seeds/03_volunteers");
const events = require("./seeds/04_events");
const categories = require("./seeds/05_categories");

const knex = require("knex")({
  client: "pg",
  version: "10.6",
  connection: {
    host: "hack.c83tkmoicfii.us-east-1.rds.amazonaws.com",
    user: "postgres",
    password: "ribbons13",
    database: "gively"
  }
});

const theData = [
  { name: "association", data: associations },
  { name: "company", data: companies },
  { name: "volunteer", data: volunteers },
  { name: "event", data: events },
  { name: "categories", data: categories }
];

const seed = (knex, table) => {
  //name: , data:
  knex(table.name)
    .del()
    .then(() => knex(table.name).insert(table.data));
};

const seedDatabase = tableData => {
  for (let table of tableData) {
    seed(knex, table);
  }
};

seedDatabase(theData);

module.exports = knex;
