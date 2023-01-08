import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto";
import cloudinary from "../../../config/cloudinary";
import { PrismaClient } from "@prisma/client";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import nextConnect from "next-connect";
import storage from "../../../config/Multer";

const prisma = new PrismaClient();

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

	// const post = await prisma.album.create({
	// 	data: {
	// 		userId: findUser.id,
	// 		asset_id: respon.asset_id,
	// 		public_id: respon.public_id,
	// 		version: Number(respon.version),
	// 		version_id: respon.version_id,
	// 		signature: respon.signature,
	// 		width: Number(respon.width),
	// 		height: Number(respon.height),
	// 		format: respon.format,
	// 		resource_type: respon.resource_type,
	// 		bytes: Number(respon.bytes),
	// 		etag: respon.etag,
	// 		url: respon.url,
	// 		secure_url: respon.secure_url,
	// 		folder: respon.folder,
	// 		original_filename: respon.original_filename,
	// 	},
	// });
};

export default postAlbum;
