// prod.js - production keys here
// dont commit this

module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	// random cookieKey
	cookieKey: process.env.COOKIE_KEY,
};
