import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllAlbum = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const respon = await prisma.album.findMany({
			include: {
				Image: true,
			},
		});

		return res.status(200).json({ data: respon });
	} catch (error) {
		return res.status(501).json({ msg: "internal server error" });
	}
};

export default getAllAlbum;
