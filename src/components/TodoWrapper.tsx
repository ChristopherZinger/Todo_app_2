import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoItem, TodoItemInterface } from "./TodoItem";
import { TodoForm } from "./TodoForm";

const initialListState: TodoItemInterface[] = [
  {
    id: 1,
    title: "learn typescript",
    info: "both in react and node",
    isCompleted: false,
  },
  {
    id: 2,
    title: "learn graphGL",
    info: "and supporting technologies",
    isCompleted: false,
  },
];

interface Props {}

export const TodoWrapper: React.FC<Props> = ({}) => {
  const [list, setList] = useState<TodoItemInterface[]>(initialListState);
  const [newItem, setNewItem] = useState<string>("");

  function handleRemove(e: React.MouseEvent, id: number): void {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  function toggleStatus(e: React.MouseEvent, id: number): void {
    const newList: TodoItemInterface[] = list.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      } else {
        return item;
      }
    });
    setList(newList);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newList = [
      ...list,
      {
        id: Math.floor(Math.random() * 1000),
        title: newItem,
        info: "and supporting technologies",
        isCompleted: false,
      },
    ];
    setList(newList);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewItem(e.target.value);
  }

  return (
    <div>
      <TodoForm submit={handleSubmit} change={handleChange} value={newItem} />
      <TodoList>
        {list.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            remove={handleRemove}
            toggleStatus={toggleStatus}
          />
        ))}
      </TodoList>
    </div>
  );
};
