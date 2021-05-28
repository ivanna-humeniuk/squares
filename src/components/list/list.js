import React from "react";
import classes from "./style.modules.scss";

const list = (props) => {
    return (
        <li className={classes.list}>{props.children}</li>
    )
}
export default list;