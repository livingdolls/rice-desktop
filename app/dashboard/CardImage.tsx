import { GrFormView } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
const CardImage = () => {
	return (
		<div className="w-full max-w-[300px] bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
			<a href="#">
				<img
					className="ring-4 ring-moon-500"
					src="https://picsum.photos/seed/picsum/350/200"
					alt="product image"
				/>
			</a>
			<div className=" p-2 flex justify-between items-center">
				<p className="text-md font-semibold text-gray-700">
					Bulan Sabit
				</p>
				<div className="flex items-center">
					{" "}
					<button>
						<GrFormView size={"40px"} />
					</button>
					<button>
						<FcLike size={"25px"} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardImage;
