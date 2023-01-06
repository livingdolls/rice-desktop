"use client";

import { useSession } from "next-auth/react";
import { BiUpload, BiSearch } from "react-icons/bi";
import CardImage from "./CardImage";

const Dashboard = () => {
	const { data, status } = useSession();

	if (status != "authenticated") {
		return <div>Akses tidak diizinkan</div>;
	}
	console.log(data, status);
	return (
		<div className="p-2">
			<div className="p-2 flex justify-between items-center ">
				<div className="flex items-center space-x-2">
					<input
						type={"text"}
						placeholder="title"
						className="w-[300px] p-2 bg-gray-200 rounded-lg focus:outline-none"
					/>
					<button className="p-2 bg-moon-500  rounded-full text-white hover:scale-105">
						<BiSearch />
					</button>
				</div>
				<button className="p-3 px-5 font-semibold text-white bg-moon-500 hover:bg-moon-800 flex space-x-3 items-center rounded-lg">
					<BiUpload /> <p className="inline ml-2">UPLOAD</p>
				</button>
			</div>

			<div className="mt-5">
				<CardImage />
			</div>
		</div>
	);
};

export default Dashboard;
