import { object, string, TypeOf } from "zod";

const payload = {
	body: object({
		title: string().min(3, { message: "minimal 3 karakter" }),
		detail: string().min(8, { message: "minimal 8 karakter" }),
	}),
};

export const createAlbumSchema = object({
	...payload,
});

export type CreateAlbumType = TypeOf<typeof createAlbumSchema>;
