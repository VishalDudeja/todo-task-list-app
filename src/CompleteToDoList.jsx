import React, { useState } from "react";
import OrderList from "./OrderList";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

function CompleteToDoList(params) {
  const [input, setInput] = useState("");

  const [list, setList] = useState([]);

  let enterItem = (event) => {
    setInput(event.target.value);

    console.log(input);
  };

  let addToList = () => {
    if (input !== "") {
      setList((preValueList) => {
        return [...preValueList, input];
      });
    } else {
      alert("Please Enter Valid Item");
    }
    setInput("");
  };

  function deleteItem(id) {
    console.log("deleted");
    setList((preValueList) => {
      return preValueList.filter((cVal, index) => {
        return index !== id;
      });
    });
  }

  /* Using  material-ui 'AddIcon' icon instaed of tying '+' in <button> tag
    <button className="add-button" onClick={addToList}>
            +
          </button> */

  /* And Also using custom commponent 'Button' instead of  buitl-in tag <button> 
 by importing  import Button from '@material-ui/core/Button'; */

  return (
    <>
      <div className="main-div">
        <br />
        <div className="center-div">
          <h1 className="list-header">To-Do List</h1>
          <br />
          <input
            className="input-box"
            type="text"
            placeholder="Add a item here..."
            onChange={enterItem}
            value={input}
          ></input>
          <Button onClick={addToList}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {list.map((cVal, index) => {
              return (
                <OrderList
                  key={index}
                  id={index}
                  value={cVal}
                  deletingItems={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default CompleteToDoList;
