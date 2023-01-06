import Slider from "../../components/Slider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-moon-200 h-screen w-screen">
			<div className="flex flex-col justify-center h-full w-full">
				<div
					className="w-4/5  mx-auto flex h-4/5 "
					style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
				>
					<div className="w-3/5 bg-moon-100 p-5 ">
						<div className="w-[80%] h-full flex flex-col justify-center mx-auto">
							<p className="font-bold text-center text-4xl text-moon-900">
								Share Your Desktop Environment To World
							</p>
							<Slider />
						</div>
					</div>

					<div className="w-2/5 bg-moon-900">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default RootLayout;
