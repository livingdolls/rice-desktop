import { NextPage } from "next";

type props = {
	id: string;
	label: string;
	placeholder: string;
	type: string;
};

const Input: NextPage<props> = ({
	id,
	label,
	placeholder,
	type,
	...action
}) => {
	return (
		<div className="mb-6">
			<label
				htmlFor={id}
				className="block mb-1 text-lg font-medium text-white"
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={id}
				className=" w-full p-2.5  focus:outline-none bg-transparent border-b-2 border-b-moon-300 placeholder-white ring-moon-300 text-white text-md font-semibold"
				placeholder={placeholder}
				{...action}
				required
			/>
		</div>
	);
};

export default Input;
