const multer = require("multer");

const MIME_TYPES = {
	// types of multimedia file format
	"image/jpg": "jpg",
	"image/jpeg": "jpg",
	"image/png": "png",
	"image.gif": "gif",
	"image.webp": "webp",
};

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		// destination for images
		callback(null, "images");
	},
	filename: (req, file, callback) => {
		// generating new name of the image file to avoid duplicates
		const name = file.originalname.replace(/\.[^/.]+$/, "");
		const extension = MIME_TYPES[file.mimetype];
		callback(null, name + Date.now() + "." + extension);
	},
});
module.exports = multer({ storage: storage }).single("image"); // Storing the posted images/GIF
