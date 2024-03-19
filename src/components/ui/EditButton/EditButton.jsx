import styles from './EditButton.module.css'

const Button = (props) => {
    const className = styles['edit-button'] + (props.className ? ' ' + props.className : '')
    return (
        <button onClick={props.onClick} className={className}>
            <img src={props.icon} />
        </button>
    )
}

export default Button;