import { NextApiRequest, NextApiResponse } from "next";
import { Album, Image, PrismaClient, User } from "@prisma/client";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const prisma = new PrismaClient();

export type TAuser = (Album & {
	Image: Image[];
})[];

const postAlbum = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await unstable_getServerSession(req, res, authOptions);

	if (!session) {
		return res.status(404).json({ msg: "Akses dilarang" });
	}

	const findUser = await prisma.user.findUnique({
		where: {
			id: session.user.id,
		},
	});

	if (findUser === null) {
		return res.status(404).json({ msg: "Pengguna tidak diizinkan" });
	}

	try {
		const respon = await prisma.album.findMany({
			where: {
				userId: findUser.id,
			},
			include: {
				Image: true,
			},
		});

		return res.status(201).json({ msg: "success", data: respon });
	} catch (error) {
		return res.status(501).json({ msg: "Internal server error!" });
	}
};

export default postAlbum;
