import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ type }) => (type === "primary" ? "Aqua" : "white")};
  color: ${({ type }) =>
    type === "primary" ? "white" : type == "link" ? "blue" : "black"};
  border: ${({ type }) =>
    type === "dashed"
      ? "1px dashed black"
      : type === "text" || type == "link"
      ? "none"
      : "1px solid black"};
  width: 200px;
  padding: 10px;
  margin: 5px;
`;
export default Button;
