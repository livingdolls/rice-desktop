import { NextApiRequest } from "next";
import { AnyZodObject, ZodError } from "zod";

export const SchemaValidator = (schema: AnyZodObject, data: NextApiRequest) => {
	try {
		const parse = schema.parse({
			body: data.body,
			query: data.query,
		});

		return true;
	} catch (error) {
		if (error instanceof ZodError) {
			return error.issues.map((issue) => {
				return {
					path: issue.path,
					message: issue.message,
				};
			});
		}

		return false;
	}
};
