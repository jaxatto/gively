const knex = require("./index.js");

function getUsers() {
  return knex("volunteer").then(vols => {
    console.log("Volunteers", vols);
    return vols;
  });
}
function getEvents() {
  return knex("event").then(events => {
    console.log("Events", events);
    return events;
  });
}

function getCompanies() {
  return knex("company").then(companies => {
    console.log("Companies", companies);
    return companies;
  });
}

function getAssociations() {
  return knex("association").then(ass => {
    console.log("Ass", ass);
    return ass;
  });
}

function getVolunteerWork() {
  return knex("volunteer_work").then(work => {
    console.log("work", work);
    return work;
  });
}

module.exports = {
  getUsers,
  getEvents,
  getCompanies,
  getAssociations,
  getVolunteerWork
};
