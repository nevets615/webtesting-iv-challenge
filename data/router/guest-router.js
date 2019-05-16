const express = require("express");

const db = require("./guestModel");
const guestRouter = express.Router();

guestRouter.get("/", (req, res) => {
  db.get()
    .then(guest => {
      res.status(200).json(guest);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The guest information could not be retrieved." });
    });
});

guestRouter.post("/", (req, res) => {
  const newName = req.body;
  const newDescription = req.body;
  console.log("request body: ", newName && newDescription);

  if (newName.name && newDescription.description && newName.id) {
    db.insert(newName && newDescription)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res.status(400).json({
          errorMessage: "Please provide name and description for the guest."
        });
      });
  } else {
    res.status(500).json({
      error: "There was an error while saving the guest to the database"
    });
  }
});

module.exports = guestRouter;
