import { NextApiRequest, NextApiResponse } from "next";

const postAlbum = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		return res.status(200).json({ data: "sukses" });
	} catch (error) {
		console.log(error);
	}
};

export default postAlbum;
