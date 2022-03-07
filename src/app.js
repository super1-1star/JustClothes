const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const serverless = require("serverless-http");
const AppError = require("./components/utils/appError");

const ItemRoutes = require("./components/Routes/ItemRoutes");
const globalErrorHandler = require("./components/Controllers/errorController");
const AdminRoutes = require("./components/Routes/AdminRoutes");
const app = express();
app.use(cors());
// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// 3) ROUTES

app.use("/item", ItemRoutes);
app.use("/admin", AdminRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
// module.exports.handler = serverless(app);
