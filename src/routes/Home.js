import React, { useState } from "react";
import { connect } from "react-redux";
import { getAddAction, getDeleteAction } from "../store";

const Home = ({ getState, addToDo, deleteToDo }) => {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input text="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
};
const mapStateToProps = (state, ownProps) => ({ getState: state });
const mapDispatchToProps = (dispatch, ownProps) => ({
  addToDo: (text) => dispatch(getAddAction(text)),
  deleteToDo: (id) => dispatch(getDeleteAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
