import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  text-align: center;
`;

const Error = () => {
  return (
    <ErrorWrapper>
      <h1>404 Error!!</h1>
      <h1>These are not the results you're looking for.</h1>
      <h3>
        Sorry, the connection with the server seems to be broken, so we have no
        results for you. Try again soon?
      </h3>
    </ErrorWrapper>
  );
};

export default Error;
