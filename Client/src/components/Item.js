import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = (props) => {
  const [done, setDone] = useState(false);
  const toggleComplete = () => {
    setDone(!done);
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        className="item__check"
        onClick={toggleComplete}
      ></input>
      <span className={done ? "item__task--complete" : "item__task"}>
        {props.name}
      </span>
      <span className="item__dlt" onClick={() => props.removeItem(props._id)}>
        {" "}
        <FontAwesomeIcon icon={faTimes} size="xs" />{" "}
      </span>
    </div>
  );
};

export default Item;
