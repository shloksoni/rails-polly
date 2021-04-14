import React from "react";
import Button from "components/Button";
import Input from "components/Input";

const PollForm = ({
  type = "create",
  title,
  setTitle,
  loading,
  options,
  setOptions,
  handleSubmit,
}) => {
  const handleSetOptions = e => {
    const optionNumber = parseInt(e.target.name);
    let optionsCopy = [...options];
    optionsCopy[optionNumber].content = e.target.value;
    setOptions(optionsCopy);
  };
  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <Input
        label="Title"
        placeholder="Poll Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label
        className="block text-sm font-medium
              leading-5 text-bb-gray-700 mt-12"
      >
        Options:
      </label>
      <Input
        name="0"
        placeholder="Option 1"
        value={options[0].content}
        onChange={handleSetOptions}
      />
      <Input
        name="1"
        placeholder="Option 2"
        value={options[1].content}
        onChange={handleSetOptions}
      />
      <Input
        name="2"
        placeholder="Option 3"
        value={options[2].content}
        onChange={handleSetOptions}
      />
      <Input
        name="3"
        placeholder="Option 4"
        value={options[3].content}
        onChange={handleSetOptions}
      />

      <Button
        type="submit"
        buttonText={type === "create" ? "Create Poll" : "Update Poll"}
        loading={loading}
      />
    </form>
  );
};

export default PollForm;
