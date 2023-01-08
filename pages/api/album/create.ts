import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import upload from "../../../config/Multer";

const app = nextConnect({
	onError(error, req: NextApiRequest, res: NextApiResponse) {
		res.status(501).json({
			error: `Sorry something Happened! ${error.message}`,
		});
	},
	onNoMatch(req, res) {
		res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
	},
});

app.use(upload.single("image"));

app.post((req: NextApiRequest, res: NextApiResponse) => {
	console.log(req.body);
	console.log(req.file);
});

export default app;

export const config = {
	api: {
		bodyParser: false, // Disallow body parsing, consume as stream
	},
};
