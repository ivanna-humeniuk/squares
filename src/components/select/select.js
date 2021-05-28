import React from "react";
import classes from "./style.module.scss"

const select = (props) => {
    const { options } = props;

    return (
        <div className={classes.block}>
            <select onChange={props.changeOption}>
                {options ? options.map((option, index) => {
                    return <option
                        value={option.field}
                        key={option.field}>
                        {option.mode.replace('Mode', ' Mode')}
                    </option>
                }) : null}
            </select>
        </div>

    )
}

export default select;