import React, { useState, useEffect } from "react";

const ListPolls = ({ polls }) => {
  return (
    <ul className="w-full border">
      {polls?.map(poll => (
        <li
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
