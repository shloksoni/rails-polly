import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const ListPolls = ({ polls }) => {
  let history = useHistory();
  const showPoll = id => {
    history.push(`poll/${id}/show`);
  };
  return (
    <ul className="w-full border">
      {polls?.map(poll => (
        <li
          onClick={() => showPoll(poll.id)}
          key={poll.title}
          className="m-5 top-0 px-6 py-3 text-black bg-white border-1 hover:bg-black hover:text-white hover:cursor-pointer"
        >
          {poll.title}
        </li>
      ))}
    </ul>
  );
};

export default ListPolls;
