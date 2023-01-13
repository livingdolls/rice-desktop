import { FiUpload } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import React, { useRef, useState } from "react";
import axios from "axios";

const InitialImagePreview = {
	gambar1: "",
	gambar2: "",
	gambar3: "",
	gambar4: "",
};

type ImgPreview = typeof InitialImagePreview;

const InitialForm = {
	title: "",
	detail: "",
	gambar1: null,
	gambar2: null,
	gambar3: null,
	gambar4: null,
};

type FormType = {
	title: string;
	detail: string;
	gambar1: File | null;
	gambar2: File | null;
	gambar3: File | null;
	gambar4: File | null;
};

const AddAlbum = () => {
	const [image, setImage] = useState<ImgPreview>(InitialImagePreview);
	const [form, setForm] = useState<FormType>(InitialForm);

	const imageHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setImage({
			...image,
			[e.target.name]: URL.createObjectURL(e.target.files![0]),
		});

		setForm({ ...form, [e.target.name]: e.target.files![0] });
	};

	const textHandleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const postDataService = async (form: FormType) => {
		await axios.post("/api/album/create", form, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
			onUploadProgress: (ProgressEvent) => {
				console.log(ProgressEvent.loaded);
				console.log(ProgressEvent.total);
			},
		});
	};

	const postData = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await postDataService(form);
	};

	const removeImage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setImage({ ...image, [(e.target as HTMLDivElement).id]: "" });
		setForm({ ...form, [(e.target as HTMLDivElement).id]: {} });
	};

	const gambar1 = useRef<HTMLInputElement | null>(null);
	const gambar2 = useRef<HTMLInputElement | null>(null);
	const gambar3 = useRef<HTMLInputElement | null>(null);
	const gambar4 = useRef<HTMLInputElement | null>(null);

	return (
		<div className="p-5">
			<form onSubmit={postData}>
				<div className="mb-6">
					<label
						htmlFor="title"
						className="text-gray-500 text-md font-semibold"
					>
						Desktop Image{" "}
						<p className="inline text-sm font-medium text-moon-900">
							(format diperbolehkan : .jpg, .jpeg, .png)
						</p>
					</label>

					<div className="flex justify-start space-x-2">
						<div className="mt-2 w-[200px] h-[100px] border-2 bg-gray-100 rounded-lg border-gray-300">
							{image.gambar1 !== "" ? (
								<div className="w-full h-full rounded-lg relative">
									<img
										className="w-full h-full rounded-lg"
										src={image.gambar1}
										onClick={() => gambar1.current!.click()}
									/>
									<div
										onClick={removeImage}
										className="absolute -top-1 -right-1 z-10"
									>
										<AiOutlineClose
											id="gambar1"
											className="bg-red-500 rounded-full text-white font-bold p-0.5 text-[22px] border-2 border-moon-white"
										/>
									</div>
								</div>
							) : (
								<AiOutlinePlus
									onClick={() => gambar1.current!.click()}
									className=" w-full h-full p-8 text-gray-300 "
								/>
							)}
						</div>

						<div className=" mt-2 w-[200px] h-[100px] border-2 bg-gray-100 rounded-lg border-gray-300">
							{image.gambar2 !== "" ? (
								<div className="w-full h-full rounded-lg relative">
									<img
										className="w-full h-full rounded-lg"
										src={image.gambar2}
										onClick={() => gambar2.current!.click()}
									/>
									<div
										onClick={removeImage}
										className="absolute -top-1 -right-1 z-10"
									>
										<AiOutlineClose
											id="gambar2"
											className="bg-red-500 rounded-full text-white font-bold p-0.5 text-[22px] border-2 border-moon-white"
										/>
									</div>
								</div>
							) : (
								<AiOutlinePlus
									onClick={() => gambar2.current!.click()}
									className=" w-full h-full p-8 text-gray-300 "
								/>
							)}
						</div>

						<div className="mt-2 w-[200px] h-[100px] border-2 bg-gray-100 rounded-lg border-gray-300">
							{image.gambar3 !== "" ? (
								<div className="w-full h-full rounded-lg relative">
									<img
										className="w-full h-full rounded-lg"
										onClick={() => gambar3.current!.click()}
										src={image.gambar3}
									/>
									<div
										onClick={removeImage}
										className="absolute -top-1 -right-1 z-10"
									>
										<AiOutlineClose
											id="gambar3"
											className="bg-red-500 rounded-full text-white font-bold p-0.5 text-[22px] border-2 border-moon-white"
										/>
									</div>
								</div>
							) : (
								<AiOutlinePlus
									onClick={() => gambar3.current!.click()}
									className=" w-full h-full p-8 text-gray-300 "
								/>
							)}
						</div>

						<div className="mt-2 w-[200px] h-[100px] border-2 bg-gray-100 rounded-lg border-gray-300">
							{image.gambar4 !== "" ? (
								<div className="w-full h-full rounded-lg relative">
									<img
										className="w-full h-full rounded-lg"
										onClick={() => gambar4.current!.click()}
										src={image.gambar4}
									/>
									<div
										onClick={removeImage}
										className="absolute -top-1 -right-1 z-10"
									>
										<AiOutlineClose
											id="gambar4"
											className="bg-red-500 rounded-full text-white font-bold p-0.5 text-[22px] border-2 border-moon-white"
										/>
									</div>
								</div>
							) : (
								<AiOutlinePlus
									onClick={() => gambar4.current!.click()}
									className=" w-full h-full p-8 text-gray-300 "
								/>
							)}
						</div>

						<input
							ref={gambar1}
							onChange={imageHandleChange}
							type={"file"}
							name="gambar1"
							className={"hidden"}
						/>

						<input
							ref={gambar2}
							onChange={imageHandleChange}
							type={"file"}
							name="gambar2"
							className={"hidden"}
						/>

						<input
							ref={gambar3}
							onChange={imageHandleChange}
							type={"file"}
							name="gambar3"
							className={"hidden"}
						/>

						<input
							ref={gambar4}
							onChange={imageHandleChange}
							type={"file"}
							name="gambar4"
							className={"hidden"}
						/>
					</div>
				</div>

				<div className="mb-6">
					<label
						htmlFor="title"
						className="text-gray-500 text-md font-semibold"
					>
						Title
					</label>

					<input
						type="text"
						id="title"
						name="title"
						onChange={textHandleChange}
						className="mt-2 p-3 bg-gray-100 text-gray-600 font-medium w-full focus:outline-none rounded-lg focus:ring-2 focus:ring-moon-500"
						placeholder="Judul Desktopmu"
					/>
				</div>

				<div className="mb-6">
					<label
						htmlFor="detail"
						className="text-gray-500 text-md font-semibold"
					>
						Keterangan
					</label>

					<textarea
						id="detail"
						rows={4}
						name="detail"
						onChange={textHandleChange}
						className="mt-2 block p-2.5 w-full text-md text-gray-600 font-medium bg-gray-100 focus:outline-none rounded-lg focus:ring-2 focus:ring-moon-500"
						placeholder="Ceritakan tentang desktop yang kamu unggah"
					/>
				</div>

				<div>
					<button className="flex items-center bg-moon-500 p-3 px-4 rounded-lg text-white font-semibold hover:bg-moon-700">
						<FiUpload /> <p className="inline ml-2">UPLOAD</p>
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddAlbum;
