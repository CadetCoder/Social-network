const emailValidator = require("email-validator");
const passwordValidator = require("password-validator");

exports.valid = (req, res, next) => {
	// check the password and email if it's valid
	const passwordSchema = new passwordValidator();
	passwordSchema
		.is()
		.min(8) // Minimum length 8
		.is()
		.max(20) // Maximum length 20
		.has()
		.uppercase() // Must have uppercase letters
		.has()
		.lowercase() // Must have lowercase letters
		.has()
		.not()
		.symbols()
		.has(); // Must have symbols
	//.has().not().spaces()
	// Should not have spaces is a wrong rule to apply

	if (
		!emailValidator.validate(req.body.email) ||
		!passwordSchema.validate(req.body.password)
	) {
		return res.status(400).send({
			error:
				" Please check your email address, your password must contain at least 8 letters with upper and lower case ",
		});
	} else if (
		emailValidator.validate(req.body.email) ||
		passwordSchema.validate(req.body.password)
	) {
		next();
	}
};
exports.checkUsername = (req, res, next) => {
	// check the username
	const regex = /^[a-zA-Z0-9_]{3,30}$/; // Letters, spaces and must be between 4 and 30 characters
	const username = req.body.username;
	if (regex.test(username) === true) {
		next();
	} else {
		return res.status(400).send({
			error:
				"Your username must be 3 characters minimum and 30 maximum, letters, numbers and underscore (_) are accepted",
		});
	}
};
