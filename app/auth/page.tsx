"use client";

import Input from "../../components/Input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";

const Login = () => {
	console.log(process.env.NEXT_URL);
	const handleGoogleLogin = () => {
		signIn("google", {
			callbackUrl: `${
				process.env.NEXT_URL ?? "http://localhost:3000"
			}/dashboard`,
		});
	};

	return (
		<div className="p-10 flex flex-col space-y-4 justify-center h-full">
			<p className="text-center text-3xl mb-5 font-bold text-white">
				LOGIN
			</p>
			<form>
				<Input id="email" label="Email" placeholder="" type="email" />

				<Input
					id="password"
					label="Password"
					placeholder=""
					type="password"
				/>

				<div>
					<button className="text-white bg-moon-500 p-2 px-3 w-full font-bold text-lg rounded-lg hover:bg-moon-600">
						LOGIN
					</button>
				</div>
			</form>

			<div className="mt-2">
				<p className="text-white font-medium text-center">
					Belum punya akun ? daftar disini
				</p>
				<p className="text-white font-medium text-center mt-2">
					Atau login menggunakan
				</p>
			</div>

			<div className="mx-auto">
				<button
					onClick={handleGoogleLogin}
					className="rounded-full mx-auto p-3 bg-moon-500"
				>
					<FcGoogle size="2em" />
				</button>

				<button className="rounded-full ml-2 mx-auto p-3 bg-moon-500">
					<FaGithub size="2em" />
				</button>

				<button className="rounded-full ml-2 mx-auto p-3 bg-moon-500">
					<FaFacebook size="2em" />
				</button>
			</div>
		</div>
	);
};

export default Login;
