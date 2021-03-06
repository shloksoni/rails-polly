import React from "react";
import { useHistory } from "react-router-dom";

const ListPolls = ({ polls }) => {
  let history = useHistory();
  const showPoll = id => {
    history.push(`poll/${id}/show`);
  };
  return (
    <ul className="w-full border shadow">
      {polls?.map(poll => (
        <li
          onClick={() => showPoll(poll.id)}
          key={poll.id}
          className="m-5 top-0 px-6 py-3 text-black bg-gray-400 border-1 hover:bg-gray-600 hover:text-white cursor-pointer"
        >
          {poll.title}
        </li>
      ))}
    </ul>
  );
};

export default ListPolls;
