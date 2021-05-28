import React from "react";
import classes from "./style.modules.scss";
import { useSelector } from "react-redux";


const Square = (props) => {
    const { id } = props;
    const { hoverSquares } = useSelector((state) => state.squares);

    let isActive = false;

    if (hoverSquares.indexOf(id) === -1) {
        isActive = false;
    } else {
        isActive = true;
    }

    const btnClass = isActive ? classes.active : '';

    return (
        <button className={`${classes.square} ${btnClass}`}
                onMouseEnter={(e) => props.onHoverSquare(e, id)}>
        </button>
    )
}

export default Square;