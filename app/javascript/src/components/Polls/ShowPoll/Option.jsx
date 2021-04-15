import React from "react";
import classnames from "classnames";

const Option = ({
  id,
  content,
  userResponse,
  selectOption,
  votesPercentage,
}) => {
  return (
    <div
      className={"m-5 top-0 relative border-1 "}
      onClick={() => selectOption(id)}
    >
      <div
        className={classnames("flex justify-between items-center h-12 p-2", {
          "bg-gray-300 hover:bg-gray-600 cursor-pointer": !userResponse,
        })}
        style={
          userResponse
            ? {
              background: `linear-gradient(to left, #e2e8f0 ${
                100 - votesPercentage
              }%, #9ba9bd 0%)`,
            }
            : null
        }
      >
        <div>
          {content}{" "}
          {id === userResponse ? <i className="ml-2 ri-check-fill "></i> : null}
        </div>
        {userResponse ? <div>{votesPercentage}%</div> : null}
      </div>
    </div>
  );
};

export default Option;
