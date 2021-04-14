import React, { useState, useEffect } from "react";
import pollsApi from "apis/polls";
import { useParams } from "react-router-dom";
import Container from "components/Container";
import { setAuthHeaders } from "../../apis/axios";

const ShowPoll = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState({ title: "" });
  const [options, setOptions] = useState([]);
  const fetchPoll = async () => {
    setAuthHeaders();
    const pollsResponse = await pollsApi.show(id);

    setPoll(pollsResponse.data.poll);
    setOptions(pollsResponse.data.options);
  };
  useEffect(() => {
    fetchPoll();
  }, []);

  return (
    <Container>
      <div className="flex justify-between items-center mt-8 py-4 border-b">
        <h1 className="text-bb-purple text-4xl font-medium">{poll.title}</h1>
      </div>
      <ul className="w-full border">
        {options?.map(option => (
          <li
            key={option.content}
            className="m-5 top-0 px-6 py-3 text-black bg-white border-1 hover:bg-black hover:text-white hover:cursor-pointer"
          >
            {option.content}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ShowPoll;
