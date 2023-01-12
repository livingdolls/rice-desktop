"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { BiUpload, BiSearch } from "react-icons/bi";
import MainModal from "../../components/Modal";
import SpinnerPage from "../../components/SpinnerPage";
import AddAlbum from "./AddAlbum";
import CardImage from "./CardImage";
import PreviewAlbum from "./PreviewAlbum";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import axios from "axios";
import { Album, Image } from "@prisma/client";
import { TAuser } from "../../pages/api/album";
import { SkeletonCard } from "../../components/SkeletonCard";

const framerMain = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};

const framerCard = {
	hidden: {
		x: -10,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
};

const ViewAlbum = async () => {
	const data = await axios.get("/api/album").then((res) => res.data);
	return data;
};

const Dashboard = () => {
	const { data, status } = useSession();
	const [ModalAdd, setModalAdd] = useState<boolean>(false);
	const [watch, setWatch] = useState<boolean>(false);

	const album = useQuery("album", ViewAlbum);

	if (status === "loading") {
		return <SpinnerPage />;
	}

	if (status != "authenticated") {
		return <div>Akses tidak diizinkan</div>;
	}

	if (album.isLoading) {
		return <SkeletonCard />;
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

			<motion.div
				variants={framerMain}
				animate="visible"
				initial="hidden"
				className="mt-5  flex flex-wrap justify-start"
			>
				{album.data.data.map((e: Album & { Image: Image[] }) => {
					return (
						<motion.div variants={framerCard} key={e.id}>
							<CardImage action={() => setWatch(true)} data={e} />
						</motion.div>
					);
				})}
			</motion.div>

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
