var knex = require("knex")({
  client: "pg",
  version: "10.6",
  connection: {
    host: "hack.c83tkmoicfii.us-east-1.rds.amazonaws.com",
    user: "postgres",
    password: "ribbons13",
    database: "gively"
  }
});

const seed = (knex, table) => {
  //name: , data:
  knex(table.name)
    .del()
    .then(() => knex(table.name).insert(table.data));
};

for (let table of tableData) {
  seed(knex, table);
}

module.exports = knex;
