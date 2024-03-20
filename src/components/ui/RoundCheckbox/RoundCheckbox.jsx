import styles from "./RoundCheckbox.module.css";

const RoundCheckbox = (props) => {
	const className =
		styles.round + (props.className ? " " + props.className : "");
	return (
		<div className={className}>
			<input
				checked={props.checked}
				onChange={props.onChange}
				type="checkbox"
				id={props.id}
			/>
			<label htmlFor={props.id}></label>
		</div>
	);
};

export default RoundCheckbox;
