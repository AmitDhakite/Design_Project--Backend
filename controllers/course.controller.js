import Course from "../models/course.model.js";

export const addCourse = (req, res) => {
  try {
    const newCourse = req.body;
    Course.create(newCourse, (err) => {
      if (!err) {
        res.status(200).send("Course Added");
      } else {
        res.status(400).json(err);
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getCourses = (req, res) => {
  try {
    Course.find({}, (err, data) => {
      if (!err) {
        console.log("here");
        res.status(200).json(data);
      } else {
        res.status(400).json(err);
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }
};
