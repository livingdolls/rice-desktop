import multer from "multer";

const upload = multer({
	storage: multer.diskStorage({
		// destination: "./public/",
		filename: (req, file, cb) => cb(null, file.originalname),
	}),
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
		}
	},
	// limits: { fileSize: 3024 * 3024 },
});

export default upload;
