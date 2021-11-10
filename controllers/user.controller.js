import User from "../models/user.model.js";
import Course from "../models/course.model.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const register = (req, res) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    User.findOne(
      { instituteEmail: newUser.instituteEmail },
      (err, foundUser) => {
        if (foundUser !== null && foundUser !== undefined) {
          res.status(200).send("User already exists");
        } else {
          bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
            newUser.password = hash;
            User.create(newUser, (err) => {
              if (!err) {
                res.status(200).send("User Registered");
              } else {
                res.status(400).json(err);
              }
            });
          });
        }
      }
    );
  } catch (e) {
    res.status(500).json(e);
  }
};

export const login = (req, res) => {
  try {
    const { instituteEmail, password } = req.body;
    console.log(req.body);
    User.findOne({ instituteEmail }, (error, data) => {
      if (data === undefined || data === null) {
        res.status(400).send("User Not Registered");
      } else
        bcrypt.compare(password, data.password, function (err, result) {
          if (result) {
            console.log(data);
            res.status(200).json(data);
          } else {
            res.status(200).send("Wrong Credentials");
          }
        });
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const addElectives = (req, res) => {
  try {
    User.findOne({ _id: req.body.userId }, (err, foundUser) => {
      if (!err) {
        foundUser.electives.el1 = req.body.el1;
        foundUser.electives.el2 = req.body.el2;
        foundUser.save();
        res.status(200).json(foundUser);
      } else {
        res.status(400).json(err);
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSelectedElectives = (req, res) => {
  try {
    User.findOne({ _id: req.body.userId }, (err, foundUser) => {
      if (!err) {
        Course.find({}, (er, foundCourses) => {
          if (!er) {
            const e1 = foundCourses.find(
              (element) => element.name === foundUser.electives.el1
            );
            const e2 = foundCourses.find(
              (element) => element.name === foundUser.electives.el2
            );
            res.status(200).json([e1, e2]);
          } else {
            res.status(400).json(er);
          }
        });
      } else {
        res.status(400).json(err);
      }
    });
  } catch (e) {
    res.status(400).json(e);
  }
};

// export const editUser = (req, res) => {
//   try {
//     const { user, userId } = req.body;
//     User.findOne({ _id: userId }, (err, foundUser) => {
//       if (!err) {
//         foundUser.firstName = user.firstName;
//         foundUser.lastName = user.lastName;
//         foundUser.mobile = user.mobile;
//         foundUser.addressLine1 = user.addressLine1;
//         foundUser.addressLine2 = user.addressLine2;
//         foundUser.city = user.city;
//         foundUser.state = user.state;
//         foundUser.zipCode = user.zipCode;
//         foundUser.country = user.country;
//         foundUser.save();
//         res.status(200).json(foundUser);
//       } else {
//         res.status(400).json(err);
//       }
//     });
//   } catch (e) {
//     res.status(400).json(e);
//   }
// };
