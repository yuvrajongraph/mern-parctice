import { React, useEffect, useState } from "react";
import "./Todo.css";
import Navbar from "../Navbar/Navbar";
import { useAuth } from "../../contexts/Auth/AuthProvider";

const Todo = () => {
  
  const todo = sessionStorage.getItem("key");
  const savedData = todo != null ? JSON.parse(todo) : null;
  const [inputList, setInputList] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [items, setItems] = useState(savedData);
  const [itemsManipulate, setItemsManipulate] = useState(savedData);
  const [toggleIcon, setToggleIcon] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  useEffect(() => {
    if (savedData == null) {
      setItems([]);
      setItemsManipulate([]);
    } else {
      setItems(savedData);
      setItemsManipulate(savedData);
    }
  },[]);

  sessionStorage.setItem("key", JSON.stringify(items));

  const handleEvent = (e) => {
    setSearchInput(e.target.value);
  };

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const getSearchItem = async () => {
    if (searchInput === "") {
      setItems(itemsManipulate);
    } else {
      const item = itemsManipulate.find((val) => {
        return val.text.toLowerCase() === searchInput.toLowerCase();
      });
      if (item) {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          `http://localhost:1010/todo/${item._id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data);
        setSearchInput("");
      }
    }
  };

  const listOfItems = async () => {
    if (inputList && !toggleIcon) {
      const item = {
        text: inputList,
      };
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      };
      if (item.text) {
        const response = await fetch(
          `http://localhost:1010/todo/${isEditItem}`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(
          items.map((val) => {
            if (val._id === isEditItem) {
              return { ...val, text: inputList };
            }
            return val;
          })
        );
        setItemsManipulate(
          items.map((val) => {
            if (val._id === isEditItem) {
              return { ...val, text: inputList };
            }
            return val;
          })
        );
        setToggleIcon(true);
        setInputList("");
        setIsEditItem(null);
      }
    } else {
      const item = {
        text: inputList,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      };
      if (item.text) {
        const response = await fetch("http://localhost:1010/todo", options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setItems((oldItems) => {
          return [...oldItems, data];
        });
        setItemsManipulate((oldItems) => {
          return [...oldItems, data];
        });
        setInputList("");
      }
    }
  };

  const deleteItems = async (id) => {
    const data = await fetch(`http://localhost:1010/todo/${id}`, {
      method: "DELETE",
    });
    setItems((oldItems) => {
      return oldItems.filter((val) => {
        return val._id !== id;
      });
    });
    setItemsManipulate((oldItems) => {
      return oldItems.filter((val) => {
        return val._id !== id;
      });
    });
  };

  const updateItems = async (id) => {
    const newUpdateItem = items.find((val) => {
      return val._id === id;
    });
    // console.log(newUpdateItem);
    setToggleIcon(false);
    setInputList(newUpdateItem.text);
    setIsEditItem(id);
  };
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="container">
          <h1 className="heading-container"> To Do List </h1>
          <input
            type="text"
            placeholder="Search an item"
            value={searchInput}
            onChange={handleEvent}
          />
          <button type="" id="search" onClick={getSearchItem}>
            Search
          </button>
          <input
            type="text"
            placeholder="Add an item"
            value={inputList}
            onChange={itemEvent}
          />
          {toggleIcon ? (
            <button type="" onClick={listOfItems}>
              +
            </button>
          ) : (
            <button type="" className="fa fa-items" onClick={listOfItems}>
              U
            </button>
          )}

          <ol>
            {items.map((item) => {
              return (
                <div className="todo_style">
                  <li key={item._id}>{item.text}</li>
                  <div className="icon">
                    <button
                      className="fa fa-items"
                      onClick={() => {
                        deleteItems(item._id);
                      }}
                    >
                      -
                    </button>
                    <button
                      className="fa fa-items"
                      onClick={() => {
                        updateItems(item._id);
                      }}
                    >
                      U
                    </button>
                  </div>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
