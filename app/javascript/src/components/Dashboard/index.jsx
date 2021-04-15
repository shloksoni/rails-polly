import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";
import Container from "components/Container";
import ListPolls from "components/Polls/ListPolls";
import Button from "components/Button";
import pollsApi from "apis/polls";
import Logger from "js-logger";
import PageLoader from "../PageLoader";

const polls = [
  { title: "shloksoni" },
  { title: "amazn" },
  { title: "something" },
];

const Dashboard = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [polls, setPolls] = useState([]);
  const fetchPolls = async () => {
    try {
      const response = await pollsApi.list();
      setPolls(response.data);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };
  const createPoll = () => {
    history.push("/create");
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  if (loading) {
    return <PageLoader />;
  }
  return (
    <Container>
      <div className="flex justify-between items-center mt-8 py-4 border-b">
        <h1 className="text-bb-purple text-4xl font-medium">POLLS</h1>
        <Button
          type="button"
          buttonText="Create +"
          loading={false}
          onClick={createPoll}
        />
      </div>
      {either(isNil, isEmpty)(polls) ? (
        <h1 className="text-xl leading-5 text-center">NO POLLS 😔</h1>
      ) : (
        <ListPolls polls={polls} />
      )}
    </Container>
  );
};

export default Dashboard;
