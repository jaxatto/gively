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

knex("event")
  .select("id")
  .then(event => console.log(event));
