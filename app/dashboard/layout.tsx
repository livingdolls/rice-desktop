import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<div>
				<Navbar />
			</div>

			<div className=" max-w-[80%] mx-auto flex mt-5 ">
				<div className="w-1/5">
					<Sidebar />
				</div>

				<div className="w-full">{children}</div>
			</div>
		</div>
	);
};

export default RootLayout;
