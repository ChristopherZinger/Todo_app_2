import React from "react";

export interface TodoItemInterface {
  id: number;
  title: string;
  info: string;
  isCompleted: boolean;
}

interface Props {
  item: TodoItemInterface;
  remove: (e: React.MouseEvent, id: number) => void;
  toggleStatus: (e: React.MouseEvent, id: number) => void;
}

export const TodoItem: React.FC<Props> = ({ item, remove, toggleStatus }) => {
  return (
    <li>
      {item.title} {item.isCompleted ? "pending" : "done"}
      <button onClick={(e) => remove(e, item.id)}>remove </button>
      <button onClick={(e) => toggleStatus(e, item.id)}>toggle </button>
    </li>
  );
};
