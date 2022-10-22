import React from "react";
import { connect } from "react-redux";
import { getDeleteAction } from "../store";

function ToDo({ text, deleteToDo }) {
  return (
    <li>
      {text}
      <button onClick={deleteToDo}>Del</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  const { id } = ownProps;
  return {
    deleteToDo: () => dispatch(getDeleteAction(id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
