import React from "react";
import classes from "./style.modules.scss"

const Loader = (props) => {
    const {isLoading, isError, children} = props;
    const content = isError ? "Oops. Something went wrong. Please try again!" : children;
    return (
        <>
            {isLoading ? <div className={classes.loader}></div> : content}
        </>
    );
};

export default Loader;
