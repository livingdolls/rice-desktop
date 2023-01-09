const Backdrop = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className="relative w-full h-full md:h-auto">{children}</div>
		</div>
	);
};

export default Backdrop;
