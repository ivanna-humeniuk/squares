import React from "react";
import classes from "./style.module.scss"
import Select from "../../../components/select/select";

const boardTop = (props) => {
    const {options, changeMode, startMode} = props;

    return (
        <div className={classes.top}>
            <Select options={options}
                    changeOption={changeMode}/>
            <button type="button"
                    className={classes.button}
                    onClick={startMode}>
                Start
            </button>
        </div>

    )
}

export default boardTop;