import { Image as TImg } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import Backdrop from "../../components/Backdrop";
import { TPreview } from "./page";
import classNames from "classnames";
import { motion } from "framer-motion";

type props = {
	action: any;
	preview: TPreview;
};

const framerMain = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.5,
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		y: 200,
		transition: {
			duration: 0.1,
		},
	},
};

const PreviewAlbum = ({ action, preview }: props) => {
	const [select, setSelect] = useState<TImg>();
	return (
		<Backdrop>
			<motion.div
				variants={framerMain}
				animate="visible"
				initial="hidden"
				exit={"exit"}
				className="bg-gray-50 w-[65%] relative m-auto p-5 flex space-x-2 rounded-lg"
			>
				<div className="w-[60%]">
					<div className="">
						<div
							id="img"
							className="relative w-full h-[450px] rounded-lg"
						>
							<Image
								src={
									select?.secure_url ??
									preview.data.Image[0].secure_url
								}
								fill={true}
								alt={"fd"}
								quality={1}
								sizes="(max-width: 100%), (max-height:100%)"
								className="rounded-lg"
							/>
						</div>

						<div className=" mt-2 flex space-x-3">
							{preview.data.Image.map((img) => {
								const tes = select?.id === img.id;

								return (
									<div
										className={classNames(
											"w-[200px] relative h-[100px]",
											`${
												tes
													? "ring-4 ring-moon-500 rounded-md"
													: ""
											}`
										)}
										onClick={() => setSelect(img)}
										key={img.asset_id}
									>
										<Image
											src={img.secure_url}
											sizes="(max-width: 100%), (max-height:100%)"
											fill={true}
											quality={1}
											alt={img.albumId}
											className={"rounded-md"}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div className="w-[40%]">
					<div className="mb-6">
						<p className="text-right font-semibold text-lg text-gray-700">
							Title
						</p>
						<p className="text-right font-poopins font-medium text-gray-500">
							{preview.data.title}
						</p>
					</div>

					<div className="mb-6">
						<p className="text-right font-semibold text-lg text-gray-700">
							Deskripsi
						</p>
						<p className="text-right font-medium text-gray-500">
							{preview.data.detail}
						</p>
					</div>

					<div className="mb-6 flex justify-between px-5">
						<div>
							<p className="font-semibold text-right text-lg text-gray-700">
								Ukuran
							</p>
							<p className="font-medium text-right text-gray-500">
								{select
									? `${select?.width} x ${select?.height}`
									: `${preview.data.Image[0].width} x ${preview.data.Image[0].height}`}
							</p>
						</div>

						<div>
							<p className="font-semibold text-right text-lg text-gray-700">
								Judul Gambar
							</p>
							<p className="font-medium text-right text-gray-500">
								{select
									? select.original_filename
									: preview.data.Image[0]
											.original_filename}{" "}
								img
							</p>
						</div>
					</div>

					<div className="mb-6 flex justify-between px-5">
						<div>
							<p className="font-semibold text-right text-lg text-gray-700">
								Size Gambar
							</p>
							<p className="font-medium text-right text-gray-500">
								{select
									? select.bytes
									: preview.data.Image[0].bytes}{" "}
								"bytes"
							</p>
						</div>

						<div>
							<p className="font-semibold text-right text-lg text-gray-700">
								Full Gambar
							</p>
							<p className="font-medium text-right text-moon-500 hover:text-moon-700">
								<a
									target={"_blank"}
									href={
										select
											? select.secure_url
											: preview.data.Image[0].secure_url
									}
								>
									Open full
								</a>
							</p>
						</div>
					</div>

					<div className="absolute bottom-5 right-5">
						<button
							onClick={action}
							className="p-2 mr-2 w-[100px] px-3 bg-moon-500 hover:bg-moon-700 rounded-sm"
						>
							<p className="text-white font-semibold ">EDIT</p>
						</button>

						<button
							onClick={action}
							className="p-2 px-3 w-[100px] bg-moon-500 hover:bg-moon-700 rounded-sm"
						>
							<p className="text-white font-semibold ">CLOSE</p>
						</button>
					</div>
				</div>
			</motion.div>
		</Backdrop>
	);
};

export default PreviewAlbum;
