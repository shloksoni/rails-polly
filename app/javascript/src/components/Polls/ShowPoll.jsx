import React, { useState, useEffect } from "react";
import pollsApi from "apis/polls";
import responseApi from "apis/responses";
import { useParams } from "react-router-dom";
import Container from "components/Container";
import { setAuthHeaders } from "../../apis/axios";
import classnames from "classnames";
const ShowPoll = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState({ title: "" });
  const [options, setOptions] = useState([]);
  const [userResponse, setUserResponse] = useState(null);

  const selectOption = async option_id => {
    if (!userResponse) {
      try {
        await responseApi.create({ response: { option_id, poll_id: poll.id } });
        fetchPoll();
      } catch (error) {
        logger.error(error);
      }
    }
  };
  const fetchPoll = async () => {
    setAuthHeaders();
    const pollsResponse = await pollsApi.show(id);
    setUserResponse(pollsResponse.data.user_response_option_id);
    setPoll(pollsResponse.data.poll);
    setOptions(pollsResponse.data.options);
  };
  useEffect(() => {
    fetchPoll();
  }, []);

  let bb_purple_color = "";
  return (
    <Container>
      <div className="flex justify-between items-center mt-8 py-4 border-b">
        <h1 className="text-bb-purple text-4xl font-medium">{poll.title}</h1>
      </div>
      <ul className="w-full border">
        {options?.map(option => (
          <li
            key={option.id}
            className={"m-5 top-0 relative border-1 "}
            onClick={() => selectOption(option.id)}
          >
            <div
              className={classnames(
                "flex justify-between items-center h-12 p-2",
                {
                  "bg-gray-300 hover:bg-gray-600 cursor-pointer": !userResponse,
                }
              )}
              style={
                userResponse
                  ? {
                    background: `linear-gradient(to left, #e2e8f0 ${
                      100 - option.response_percentage
                    }%, #9ba9bd 0%)`,
                  }
                  : null
              }
            >
              <div>
                {option.content}{" "}
                {option.id === userResponse ? (
                  <i className="ml-2 ri-check-fill "></i>
                ) : null}
              </div>
              {userResponse ? <div>{option.response_percentage}%</div> : null}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ShowPoll;
