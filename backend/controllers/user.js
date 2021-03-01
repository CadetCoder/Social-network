const bcrypt = require("bcrypt"); // to encrypt password by hashing
const db = require("../models"); // db models
const token = require("../middleware/token"); // module that generates the token
const fs = require("fs"); //file system
const { Op } = require("mysql"); //db

exports.signup = async (req, res) => {
	try {
		const user = await db.User.findOne({
			where: { email: req.body.email },
		});
		if (user !== null) {
			if (user.username === req.body.username) {
				return res.status(400).json({ error: "Username already taken!" });
			}
		} else {
			const hash = await bcrypt.hash(req.body.password, 10);
			const newUser = await db.User.create({
				username: req.body.username,
				email: req.body.email,
				password: hash,
				admin: false,
			});

			const tokenObject = await token.issueJWT(newUser);
			res.status(201).send({
				user: newUser,
				token: tokenObject.token,
				expires: tokenObject.expiresIn,
				message: `Account created successsfuly ${newUser.username} !`,
			});
		}
	} catch (error) {
		return res.status(400).send({ error: "email already in use" });
	}
};

exports.login = async (req, res) => {
	try {
		const user = await db.User.findOne({
			where: { email: req.body.email },
		}); // to check when the email address is already registered in DB
		if (user === null) {
			return res.status(403).send({ error: "Failed to connect" });
		} else {
			const hash = await bcrypt.compare(req.body.password, user.password); // here to compare the passwords
			if (!hash) {
				return res.status(401).send({ error: "Incorrect password!" });
			} else {
				const tokenObject = await token.issueJWT(user);
				res.status(200).send({
					// return the user and the token
					user: user,
					token: tokenObject.token,
					sub: tokenObject.sub,
					expires: tokenObject.expiresIn,
					message: "Hello " + user.username + " !",
				});
			}
		}
	} catch (error) {
		return res.status(500).send({ error: "Server error" });
	}
};
exports.getAccount = async (req, res) => {
	// to find the user and return the user object
	try {
		const user = await db.User.findOne({
			where: { id: req.params.id },
		});
		res.status(200).send(user);
	} catch (error) {
		return res.status(500).send({ error: "Server error" });
	}
};
exports.getAllUsers = async (req, res) => {
	// send all users except the admin at line 80
	try {
		const users = await db.User.findAll();
		const notAdmin = users.filter(x => x.admin !=true)
		res.status(200).send(notAdmin);
	} catch (error) {
		return res.status(500).send({ error: "Server error" });
	}
};
exports.updateAccount = async (req, res) => {
	// modify the profile
	const id = req.params.id;
	try {
		const userId = token.getUserId(req);
		let newPhoto;
		let user = await db.User.findOne({ where: { id: id } }); // find the user in DB
		if (userId === user.id) {
			if (req.file && user.photo) {
				newPhoto = `${req.protocol}://${req.get("host")}/upload/${
					req.file.filename
				}`;
				const filename = user.photo.split("/upload")[1];
				fs.unlink(`upload/${filename}`, (err) => {
					// if the photos already exists it'll delete
					if (err) console.log(err);
					else {
						console.log(`Deleted file: upload/${filename}`);
					}
				});
			} else if (req.file) {
				newPhoto = `${req.protocol}://${req.get("host")}/upload/${
					req.file.filename
				}`;
			}
			if (newPhoto) {
				user.photo = newPhoto;
			}
			if (req.body.bio) {
				user.bio = req.body.bio;
			}
			if (req.body.username) {
				user.username = req.body.username;
			}
			const newUser = await user.save({ fields: ["username", "bio", "photo"] }); // to save the changes in DB
			res.status(200).json({
				user: newUser,
				messageReturn: "Profile modified successfully!!",
			});
		} else {
			res
				.status(400)
				.json({ messageReturn: "Invalid operation!" });
		}
	} catch (error) {
		return res.status(500).send({ error: "Server error" });
	}
};
exports.deleteAccount = async (req, res) => {
	try {
		const id = req.params.id;
		const user = await db.User.findOne({ where: { id: id } });
		if (user.photo !== null) {
			const filename = user.photo.split("/upload")[1];
			fs.unlink(`upload/${filename}`, () => {
				// if photo exists it'll delete and the account
				db.User.destroy({ where: { id: id } });
				res.status(200).json({ messageReturn: "deleted user" });
			});
		} else {
			db.User.destroy({ where: { id: id } }); // delete the account
			res.status(200).json({ messageReturn: "deleted user" });
		}
	} catch (error) {
		return res.status(500).send({ error: "Server error" });
	}
};
