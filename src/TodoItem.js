import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import './TodoItem.css'

function TodoItem({ text, completed, onComplete, onDelete}) {
    return(
        <li className='TodoItem'>
            <CompleteIcon />
            {/* <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onComplete}>v {completed} </span> */}
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            {/* <span className='Icon Icon-delete' onClick={onDelete}>X</span> */}
            <DeleteIcon />
        </li>
    );
}

export { TodoItem };