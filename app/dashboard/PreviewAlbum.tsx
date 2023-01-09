import Backdrop from "../../components/Backdrop";
type props = {
	action: any;
};

const PreviewAlbum = ({ action }: props) => {
	return (
		<Backdrop>
			<div onClick={action} className="bg-white w-[60%] m-auto">
				<div className="">
					<p>Prev</p>
					<p>X</p>
				</div>
			</div>
		</Backdrop>
	);
};

export default PreviewAlbum;
