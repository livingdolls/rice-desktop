import { Image as IMG } from "@prisma/client";
import Image from "next/image";

type propCard = {
	album: IMG;
};

const CardAlbum = ({ album }: propCard) => {
	console.log(album);
	return (
		<div className="mr-8 mb-5 w-[300px] h-[220px] pb-3 rounded-lg dark:bg-gray-800 dark:border-gray-700">
			<div className="relative w-full h-[80%]">
				<Image
					src={album.secure_url}
					alt={album.public_id}
					fill={true}
					priority
					quality={1}
					sizes="(max-width: 100%), (max-height:100%)"
				/>
			</div>
		</div>
	);
};

export default CardAlbum;
