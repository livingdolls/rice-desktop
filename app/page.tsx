"use client";

import axios from "axios";
import NavBar from "../components/Navbar";
import { useQuery } from "react-query";
import CardAlbum from "../components/CardAlbum";
import { motion } from "framer-motion";
import { Album, Image } from "@prisma/client";
import { SkeletonCard } from "../components/SkeletonCard";

type respAlbum = {
	data: (Album & {
		Image: Image[];
	})[];
};

const ViewAlbum = async () => {
	const data: respAlbum = await axios
		.get("/api/globals")
		.then((res) => res.data);
	return data;
};

const framerMain = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
		},
	},
};

const framerCard = {
	hidden: {
		y: 10,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

export default function Home() {
	const album = useQuery("global-album", ViewAlbum);

	if (album.isLoading) {
		return (
			<div className="w-[80%] mx-auto mt-20">
				<SkeletonCard />;
			</div>
		);
	}

	return (
		<div>
			<div>
				<NavBar />
			</div>

			<motion.div
				variants={framerMain}
				animate="visible"
				initial="hidden"
				className="max-w-[80%] mx-auto p-5 flex flex-wrap justify-start space-x-5 mt-5"
			>
				{album.data?.data.map((e) => {
					return (
						<motion.div variants={framerCard} key={e.id}>
							<CardAlbum album={e.Image[0]} />
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
}
