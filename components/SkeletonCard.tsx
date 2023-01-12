export const SkeletonCard = () => {
	return (
		<div className="flex mt-5 flex-col space-y-10">
			<div role="status" className="max-w-sm animate-pulse">
				<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
			</div>

			<div className="flex space-x-5">
				<div
					role="status"
					className="mr-8 mb-5 w-[300px] h-[220px] pb-3 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
				>
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				</div>

				<div
					role="status"
					className="mr-8 mb-5 w-[300px] h-[220px] pb-3 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
				>
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				</div>

				<div
					role="status"
					className="mr-8 mb-5 w-[300px] h-[220px] pb-3 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
				>
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				</div>

				<div
					role="status"
					className="mr-8 mb-5 w-[300px] h-[220px] pb-3 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
				>
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				</div>
			</div>
		</div>
	);
};
