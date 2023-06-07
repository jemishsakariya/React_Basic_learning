import React from "react";
import "../Home.css";
import { useState } from "react";

const TodoList = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    if (inputList !== "") {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    }
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const ItemList = (props) => {
    return (
      <>
        <div style={{ display: "flex", gap: "0.8rem" }}>
          {/* in delete we need id =>"index" */}
          <p
            onClick={() => {
              props.onSelect(props.id);
            }}
            style={{ cursor: "pointer" }}
          >
            ❌
          </p>
          <li style={{ listStyle: "none" }}>{props.text}</li>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            height: "50%",
            width: "30rem",
            borderRadius: "1rem 1rem 1px 1px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1bc4ad",
              color: "#fff",
              border: "1px solid black",
              borderRadius: "1rem 1rem 0px 0px",
            }}
          >
            Todo List
          </h1>
          <hr /> <br />
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <input
              className="inp"
              type="text"
              placeholder="Add a Items"
              value={inputList}
              onChange={itemEvent}
            />
            <button
              className="btn"
              style={{ borderRadius: "2rem" }}
              onClick={listOfItems}
            >
              +
            </button>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              maxWidth: "16rem",
              maxHeight: "10rem",
              marginLeft: "4rem",
              overflowY: "scroll",
            }}
          >
            <ol>
              {/* <li style={{ listStyle: "none" }}>{inputList}</li> */}
              {items.map((itemsValue, index) => {
                return (
                  <ItemList
                    key={index}
                    id={index}
                    text={itemsValue}
                    onSelect={deleteItem}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
