import "./TaskTitle.css";

const TaskTitle = ({
	setCount,
	count,
	display,
	textDecoration,
	title,
	updateStorage,
	item,
}) => {
	return (
		<>
			<span
				onClick={() => (
					(item.count = count + 1),
					setCount(count + 1),
					updateStorage()
				)}
				style={{
					display,
					textDecoration,
				}}
				className="tasks__task-title"
			>
				{title}
			</span>
			{/* <span className="testing">salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi salam sahbi </span> */}
		</>
	);
};

export default TaskTitle;
