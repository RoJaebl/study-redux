import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ getState }) {
  const { id } = useParams();
  const toDo = getState.find((state) => state.id === parseInt(id));
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({ getState: state });
export default connect(mapStateToProps)(Detail);
