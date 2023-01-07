import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { randomUUID } from "crypto";
import cloudinary from "../../../config/cloudinary";

export const config = {
	api: {
		bodyParser: false,
	},
};

const postAlbum = async (req: NextApiRequest, res: NextApiResponse) => {
	const form = new formidable.IncomingForm({
		multiples: false,
		keepExtensions: true,
		maxFileSize: 3 * 1024 * 1024,
	});
	form.parse(req);

	form.on("error", async (err) => {
		if (err.code === 1009) {
			return res.status(413).json({ msg: "max file upload 3mb!" });
		}
		return res.status(422);
	});

	// Begin proses upload
	form.on("fileBegin", async (formName, file) => {
		if (file.mimetype) {
			if (
				file.mimetype === "image/jpg" ||
				file.mimetype === "image/png" ||
				file.mimetype === "image/jpeg"
			) {
				const ext = file.mimetype.split("/").slice(-1)[0];
				file.newFilename = `${randomUUID()}-${Date.now()}.${ext}`;
			} else {
				return res.status(415).json({ msg: "file dilarang!" });
			}
		}
	});

	form.on("file", async (formname, file) => {
		const respon = await cloudinary.v2.uploader.upload(file.filepath, {
			folder: process.env.CLOUDINARY_FOLDER,
		});
		console.log(respon);
	});
};

export default postAlbum;
