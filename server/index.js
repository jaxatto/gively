const express = require("express");
const databaseFunctions = require("./database/requests");
const app = express();
const port = 3000;

const {
  getUsers,
  getEvents,
  getCompanies,
  getAssociations,
  getVolunteerWork
} = databaseFunctions;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", (req, res) => {
  getUsers().then(users => {
    console.log("server users", users);
    res.send(JSON.stringify(users));
  });
});

app.get("/events", (req, res) => {
  getEvents().then(events => {
    console.log("server users", events);
    res.json(events);
  });
});

app.get("/companies", (req, res) => {
  getCompanies().then(companies => {
    console.log("server users", companies);
    res.send(JSON.stringify(companies));
  });
});

app.get("/associations", (req, res) => {
  getAssociations().then(associations => {
    console.log("server users", associations);
    res.send(JSON.stringify(associations));
  });
});

app.get("/volunteerwork", (req, res) => {
  getVolunteerWork().then(work => {
    console.log("server users", work);
    res.send(JSON.stringify(work));
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
