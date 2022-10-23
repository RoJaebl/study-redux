import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDeleteAction } from "../store";

function ToDo({ text, deleteToDo, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
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
