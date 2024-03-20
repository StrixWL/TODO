import { forwardRef } from "react";
import "./TaskInput.css";

const TaskInput = forwardRef(({ onBlur, title, display, i }, ref) => {
	return (
		<input
			ref={ref}
			style={{
				display,
			}}
			maxLength="30"
			onBlur={() => onBlur(i)}
			defaultValue={title}
			className="tasks__task-input"
			type="text"
		/>
	);
});

export default TaskInput;
