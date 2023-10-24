const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, //1 hour limit
  max: 5, //5 request limit
  message: {
    message: "Too many feedbacks from this IP, please try later after 1 hour",
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, //return rate limit info in the "RateLimit-*" headers
  legacyHeaders: false, //Disable the "X-RateLimit-* headers
});
module.exports = rateLimiter;