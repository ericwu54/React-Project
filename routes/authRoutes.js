const passport = require("passport");

module.exports = (app) => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"],
		})
	);

	app.get("/auth/google/callback", passport.authenticate("google"));

	app.get("/api/logout", (req, res) => {
		req.logout();
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};

// mongo
// jtq0djCoIfu58l5k
// mongodb+srv://prodUser:<password>@cluster0.8apja.mongodb.net/<dbname>?retryWrites=true&w=majority

// google
// 40542226276-849ligbr05qgqd5b2ru33btaj1jsekek.apps.googleusercontent.com
// G7SSxK8GejRT6tTtIj_CzH01
