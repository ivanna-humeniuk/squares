import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/square/actions";
import BoardTop from "./boardTop/boardTop";
import BoardBottom from "./boardBottom/boardBottom";
import BoardList from "./boardLists/boardLists";
import classes from "./style.modules.scss";

const Board = () => {

    const dispatch = useDispatch();
    const {
        modes,
        activeMode,
        hoverSquares,
        isStart
    } = useSelector(state => state.squares);

    const handleMode = (event) => {
        const value = event.target.value;
        if (activeMode === value) {
            return false
        } else {
            dispatch(actions.removeAllSquares());
            dispatch(actions.setActiveMode(value));
        }
    }

    const handleActiveMode = (e) => {
        dispatch(actions.removeAllSquares());
        dispatch(actions.startActiveMode());
    }

    const handleHover = (e, id) => {
        if (hoverSquares.indexOf(id) === -1) {
            dispatch(actions.setHoverSquares(id));
        } else {
            dispatch(actions.removeHoverSquares(id));
        }
    }

    return (
        <div className={classes.board}>
            <div className={classes.wrap}>
                <BoardTop options={modes}
                          startMode={handleActiveMode}
                          changeMode={handleMode}/>
                {isStart ? <BoardBottom fields={activeMode}
                                        onHoverSquare={handleHover}/> : null
                }
            </div>
            {isStart ? <BoardList lists={hoverSquares}/> : null}
        </div>
    )
}

export default Board;