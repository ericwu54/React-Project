const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

const app = express();

// connect app to mongoDB
mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// config app use
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

// import routes
require("./routes/authRoutes")(app);
app.get("/", (req, res) => {
	res.send({ hi: "there" });
});

// listen to heroku port or locl port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT);
