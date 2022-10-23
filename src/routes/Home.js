import React, { useState } from "react";
import { connect } from "react-redux";
import { getAddAction } from "../store";
import ToDo from "../components/ToDo";

const Home = ({ getState, addToDo }) => {
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
      <ul>
        {getState.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
};
const mapStateToProps = (state, ownProps) => ({ getState: state });
const mapDispatchToProps = (dispatch, ownProps) => ({
  addToDo: (text) => dispatch(getAddAction(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
