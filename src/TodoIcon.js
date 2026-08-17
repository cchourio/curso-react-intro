import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'
import React from "react";

const inconType = {
    "check": <CheckSVG />,
    "delete": <DeleteSVG />
}

function TodoIcon({ type }) {
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            {inconType[type]}
        </span>
    );
}

export { TodoIcon }