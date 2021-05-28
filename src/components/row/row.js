import React from "react";
import Square from "../square/square";
import classes from "./style.modules.scss";

const row = (props) => {

    const { squares, row, onHoverSquare } = props;

    const squaresArr = [];

    for (let i = 0; i < squares; i++) {
        squaresArr.push(<Square key={i}
                                id={`${row} col ${i + 1}`}
                                onHoverSquare={onHoverSquare}/>)
    }

    return (
        <div className={classes.squareRow}>
            {squaresArr}
        </div>
    )
}

export default row;