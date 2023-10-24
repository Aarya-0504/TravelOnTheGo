const { body } = require("express-validator");

const validate = [
  body("name").notEmpty().withMessage("You must enter a valid Name").trim(),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("You must enter a valid email")
    .normalizeEmail(),
  body("subject")
    .notEmpty()
    .withMessage("You must enter a valid subject")
    .trim(),
  body("text")
    .notEmpty()
    .withMessage("You must enter a valid text")
    .isLength({ min: 10 })
    .withMessage("Text must be at least 10 characters long")
    .trim(),
];
module.exports = validate;