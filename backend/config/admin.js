const db = require("../models");
const bcrypt = require("bcrypt");
// Function that automatically create an admin account in the database when there's no account exist
function setAdmin(req, res) {
	db.User.findOne({ where: { email: "admin@mail.com" } || { username: "admin" } })
		.then((user) => {
			if (!user) {
				bcrypt
					.hash("Moderator", 10) // password for admin
					.then((hash) => {
						const admin = db.User.create({
							username: "admin",
							email: "admin@mail.com",
							password: hash,
							admin: true,
						})
							.then((admin) => {
								console.log({
									admin,
									message: `Admin account successfully created ${admin.username} !`,
								});
							})
							.catch((error) => {
								res.status(400).json({ error });
							});
					})
					.catch((error) => {
						res.status(500).send({ error });
					});
			} else {
				console.log({ message: "Admin already created" });
			}
		})
		.catch((error) => {
			console.log({ error });
		});
}
module.exports = setAdmin();
