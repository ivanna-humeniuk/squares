import React from "react";
import Row from "../../../components/row/row";

const boardBottom = (props) => {
    const { fields, onHoverSquare } = props;
    const rows = [];
    for (let i = 0; i < fields; i++) {
        rows.push(<Row squares={fields}
                       key={i}
                       row={`row ${i + 1}`}
                       onHoverSquare={onHoverSquare}/>)
    }
    return (
        <div>
            {rows}
        </div>
    )
}

export default boardBottom;