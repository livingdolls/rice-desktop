"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { BiUpload, BiSearch } from "react-icons/bi";
import MainModal from "../../components/Modal";
import SpinnerPage from "../../components/SpinnerPage";
import AddAlbum from "./AddAlbum";
import CardImage from "./CardImage";
import PreviewAlbum from "./PreviewAlbum";

const Dashboard = () => {
	const { data, status } = useSession();
	const [ModalAdd, setModalAdd] = useState<boolean>(false);
	const [watch, setWatch] = useState<boolean>(false);

	if (status === "loading") {
		return <SpinnerPage />;
	}

	if (status != "authenticated") {
		return <div>Akses tidak diizinkan</div>;
	}

	return (
		<div className="p-2">
			<div className="p-2 flex justify-between items-center ">
				<div className="flex items-center space-x-2">
					<input
						type={"text"}
						placeholder="Title"
						className="w-[300px] p-3 text-sm font-semibold text-gray-500 bg-gray-200 rounded-md focus:outline-none"
					/>
					<button className="p-2 bg-moon-500  rounded-full text-white hover:scale-105">
						<BiSearch />
					</button>
				</div>
				<button
					onClick={() => setModalAdd(!ModalAdd)}
					className="p-3 px-5 font-semibold text-white bg-moon-500 hover:bg-moon-800 flex space-x-3 items-center rounded-lg"
				>
					<BiUpload /> <p className="inline ml-2">UPLOAD</p>
				</button>
			</div>

			<div className="mt-5 flex flex-wrap justify-start">
				<CardImage action={() => setWatch(true)} />
				<CardImage action={() => setWatch(true)} />
				<CardImage action={() => setWatch(true)} />
				<CardImage action={() => setWatch(true)} />
				<CardImage action={() => setWatch(true)} />
				<CardImage action={() => setWatch(true)} />
			</div>

			{ModalAdd ? (
				<MainModal
					judul={"Bagikan Desktopmu"}
					action={() => setModalAdd(!ModalAdd)}
				>
					<AddAlbum />
				</MainModal>
			) : null}

			{watch ? <PreviewAlbum action={() => setWatch(false)} /> : null}
		</div>
	);
};

export default Dashboard;
