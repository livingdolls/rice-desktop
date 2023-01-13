import { GrFormView } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { Album, Image as TImg } from "@prisma/client";
import Image from "next/image";

type props = {
	action: any;
	data: Album & { Image: TImg[] };
};

const CardImage = ({ action, data }: props) => {
	return (
		<div
			onClick={action}
			className="mr-8 mb-5 w-[300px] h-[220px] pb-3 rounded-lg dark:bg-gray-800 dark:border-gray-700"
		>
			<div className="relative w-full h-[80%]">
				<Image
					src={data.Image[0].secure_url}
					alt={data.title}
					fill={true}
					priority
					quality={1}
					sizes="(max-width: 100%), (max-height:100%)"
				/>
			</div>
			<div className=" p-2 flex justify-between items-center">
				<p className="text-md font-semibold text-gray-700">
					{data.title}
				</p>
				<div className="flex items-center">
					<button>
						<FcLike size={"25px"} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardImage;
