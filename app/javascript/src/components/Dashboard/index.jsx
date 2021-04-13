import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";
import Container from "components/Container";
import ListPolls from "components/Polls/ListPolls";
const polls = [
  { title: "shloksoni" },
  { title: "amazn" },
  { title: "something" },
];
const Dashboard = ({ history }) => {
  return (
    <Container>
      <div className="flex justify-between items-center mt-8 py-4 border-b">
        <h1 className="text-bb-purple text-4xl font-medium">POLLS</h1>
      </div>
      {either(isNil, isEmpty)(polls) ? (
        <h1 className="text-xl leading-5 text-center">
          You have no tasks assigned 😔
        </h1>
      ) : (
        <ListPolls polls={polls} />
      )}
    </Container>
  );
};

export default Dashboard;
