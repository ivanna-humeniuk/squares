import React from 'react';
import List from '../../../components/list/list';
import classes from "./style.modules.scss";


const boardLists = (props) => {
    const {lists} = props;
    return (
        <div className={classes.container}>
            <div className={classes.title}>Hover squares</div>
            <ul className={classes.lists}>
                {lists ? lists.map((list) => {
                    return <List key={list}>{list}</List>
                }) : null}
            </ul>
        </div>
    );
}

export default boardLists;