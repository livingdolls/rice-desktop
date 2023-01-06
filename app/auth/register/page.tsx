import Link from "next/link";
import Input from "../../../components/Input";

const Register = () => {
	return (
		<div className="p-10 flex flex-col space-y-4 justify-center h-full">
			<p className="text-center text-3xl mb-5 font-bold text-white">
				REGISTER
			</p>
			<form>
				<Input
					id="fullname"
					label="Full Name"
					placeholder=""
					type="text"
				/>
				<Input
					id="username"
					label="Username"
					placeholder=""
					type="text"
				/>
				<Input id="email" label="Email" placeholder="" type="email" />

				<Input
					id="password"
					label="Password"
					placeholder=""
					type="password"
				/>

				<Input
					id="cpassword"
					label="Confirm Password"
					placeholder=""
					type="password"
				/>

				<div>
					<button className="text-white bg-moon-500 p-2 px-3 w-full font-bold text-lg rounded-lg hover:bg-moon-600">
						REGISTER
					</button>
				</div>
			</form>

			<div className="mt-2">
				<p className="text-white font-medium text-center">
					Belum punya akun ? daftar{" "}
					<Link
						href="auth"
						className="text-white font-semibold hover:text-moon-500"
					>
						disini
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
