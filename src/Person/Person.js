import React from "react";
import styled from "styled-components";

// import "./Person.css";

const StyleDiv = styled.div`
  text-align: center;
  margin: 16px auto;
  padding: 20px;
  width: 50%;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;

  "@media (minWidth: 500px)": {
    width: "400px";
  }
`;

const person = (props) => {
  // const style = {
  //   "@media (minWidth: 500px)": {
  //     width: "400px",
  //   },
  // };
  return (
    <StyleDiv>
      <p onClick={props.click}>
        I'm a {props.name} and I'm {props.age} years young.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
  );
};

export default person;
