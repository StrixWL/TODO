import styles from './EditButton.module.css'
import edit from '../../../assets/edit.svg'

const EditButton = (props) => {
    const className = styles['edit-button'] + (props.className ? ' ' + props.className : '')
    return (
        <button onClick={props.onClick} className={className}>
            <img src={edit} alt="Logo" />
        </button>
    )
}

export default EditButton;