import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ getState }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText(text);
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
}

const mapStateToProps = (state, ownProps) => ({ getState: state });
export default connect(mapStateToProps)(Home);
