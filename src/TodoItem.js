function TodoItem({ text, completed }) {
    return(
        <li>
            <span>v {completed} </span>
            <p>{text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };