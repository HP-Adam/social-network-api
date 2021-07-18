const { User } = require("../models");

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .then((dbData) => res.json(dbData))
      .catch((err) => res.status(400).json(err));
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No user with this id found" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.status(400).json(err));
  },

  createUser(req, res) {
    User.create(req.body)
      .then((dbData) => res.json(dbData))
      .catch((err) => res.status(400).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No user with this id found" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "No user with this id found" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
