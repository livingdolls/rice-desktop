import cloudinary from "../config/cloudinary";

export const UploadCloud = async (file: string) => {
	const respon = await cloudinary.v2.uploader.upload(file, {
		folder: process.env.CLOUDINARY_FOLDER,
	});

	return respon;
};
