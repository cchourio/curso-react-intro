function TodoCounter({ completed, total }) {
    return(
        <h1>
            Has Completado {completed} de {total} TODOs
        </h1>
    );
}

export { TodoCounter };