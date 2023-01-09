import { NextApiRequest, NextApiResponse } from "next";
import upload from "../../../config/Multer";
import { SchemaValidator } from "../../../config/Validator";
import { createAlbumSchema } from "../../../schema/Album.schema";
import app from "../../../config/NextConnect";
import { UploadCloud } from "../../../utils/UploadCloud";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
import { UploadApiResponse } from "cloudinary";

const prisma = new PrismaClient();

export type inputImg = "gambar1" | "gambar2" | "gambar3" | "gambar4";

type TFImg = {
	fieldname: string;
	originalname: string;
	encoding: string;
	mimetype: string;
	destination: string;
	filename: string;
	path: string;
	size: number;
};

interface MulterRequest extends NextApiRequest {
	files: Record<inputImg, TFImg[]>;
}

export interface cloudFack extends UploadApiResponse {
	asset_id: string;
	version_id: string;
	folder: string;
}

app.post(
	upload.fields([
		{ name: "gambar1", maxCount: 1 },
		{ name: "gambar2", maxCount: 1 },
		{ name: "gambar3", maxCount: 1 },
		{ name: "gambar4", maxCount: 1 },
	]),
	async (req: NextApiRequest, res: NextApiResponse) => {
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

		const validasi = SchemaValidator(createAlbumSchema, req);
		// Validasi
		if (Object.keys((req as MulterRequest).files).length === 0) {
			return res.status(400).json({ msg: "gambar dibutuhkan" });
		}

		if (validasi !== true) {
			return res.status(412).json(validasi);
		}
		// End Validasi

		const img: Record<inputImg, TFImg[]> = (req as MulterRequest).files;
		const imgValue: TFImg[][] = Object.values(img);

		const path = imgValue.map((e) => {
			return e[0].path;
		});

		const imageRespon = await Promise.all(
			path.map(async (e) => {
				const upload = await UploadCloud(e);

				return upload;
			})
		);

		const newData: cloudFack[] = await Promise.all(
			imageRespon.map(async (e) => {
				const { api_key, tags, type, etag, placeholder, ...vl } = e;
				return vl;
			})
		);

		try {
			const respon = await prisma.album.create({
				data: {
					userId: findUser.id,
					title: req.body.title,
					detail: req.body.detail,
					Image: {
						createMany: {
							data: newData,
						},
					},
				},
			});

			return res
				.status(201)
				.json({ msg: "berhasil membuat post album", data: respon });
		} catch (error) {
			return res
				.status(402)
				.json({ msg: "ada kesalahan, silahkan ulangi", data: null });
		}
	}
);

export default app;

export const config = {
	api: {
		bodyParser: false, // Disallow body parsing, consume as stream
	},
};
