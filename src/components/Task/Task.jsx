import "./Task.css";
import RoundCheckbox from "../ui/RoundCheckbox/RoundCheckbox";
import Button from "../ui/Button/Button";
import { useEffect, useState } from "react";
import Counter from "./Counter/Counter";
import TaskInput from "./TaskInput/TaskInput";
import TaskTitle from "./TaskTitle/TaskTitle";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

const Task = (props) => {
	const [isBeingEdited, setIsBeingEdited] = useState(
		props.item.isBeingEdited
	);
	const [done, setDone] = useState(props.item.done);
	const [count, setCount] = useState(props.item.count);
	const onBlur = () => {
		props.item.title = props.item.ref.current.value;
		setIsBeingEdited(false);
		if (!props.item.title) props.onTaskRemove(props.item.i);
		props.updateStorage();
	};
	const onTaskEdit = () => {
		setIsBeingEdited(true);
		props.item.ref.current.value = props.item.title;
		props.item.focus();
		props.updateStorage();
	};
	const onInputChange = () => {
		props.item.done = !props.item.done;
		setDone(!done);
		props.updateStorage();
	};
	useEffect(() => {
		props.item.focus();
	}, [isBeingEdited]);
	return (
		<li key={props.item.i} className="tasks__task">
			<RoundCheckbox
				id={props.item.i}
				checked={props.item.done}
				className="tasks__task-checkbox"
				onChange={() => onInputChange()}
			/>
			<TaskInput
				onBlur={onBlur}
				title={props.item.title}
				ref={props.item.ref}
				display={isBeingEdited ? "inline" : "none"}
				i={props.item.i}
			/>
			<TaskTitle
				setCount={setCount}
				count={count}
				display={isBeingEdited ? "none" : "inline"}
				textDecoration={props.item.done ? "line-through" : "none"}
				title={props.item.title}
				item={props.item}
				updateStorage={props.updateStorage}
			/>
			<Counter count={props.item.count} />
			<Button
				icon={editIcon}
				className="tasks__task-edit-btn"
				onClick={() => onTaskEdit()}
			/>
			<Button
				icon={deleteIcon}
				className="tasks__task-delete-btn"
				onClick={() => props.onTaskRemove(props.item.i)}
			/>
		</li>
	);
};

export default Task;
