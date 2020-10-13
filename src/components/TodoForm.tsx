import React from "react";

interface Props {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const TodoForm: React.FC<Props> = ({ submit, change, value }) => {
  return (
    <form onSubmit={submit}>
      <input name="addInput" onChange={change} type="text" value={value} />
      <button type="submit"> add </button>
    </form>
  );
};
