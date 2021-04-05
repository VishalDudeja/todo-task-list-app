import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

function OrderList(props) {
  return (
    <>
      <div className="todo-style">
        <span
          className="cross-button"
          onClick={() => props.deletingItems(props.id)}
        >
          <ClearIcon />
        </span>
        <li>{props.value}</li>
      </div>
    </>
  );
}

export default OrderList;

/* Instead of manually adding 'x' in button , have used icon from 'Material-ui' by importing 'ClearIcon'
<button
            className="cross-button"
            onClick={() => props.deletingItems(props.id)}
          >
            x
          </button> */
