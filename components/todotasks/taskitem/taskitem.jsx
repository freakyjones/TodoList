import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editStatus, editTodo } from "../../../slices/todoSlice";

export default function Taskitem({ id, isActive, description }) {
  const dispatch = useDispatch();
  const [editOpen, setEditOpen] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    setCurrentText(description);
  }, []);
  return (
    <div className="taskitem mt-6 flex gap-4 items-center px-5 py-5 ">
      <input
        type="checkbox"
        checked={isActive}
        name="task"
        value="done"
        onChange={() => {
          dispatch(editStatus(id));
        }}
      />
      {editOpen ? (
        <input
          type="text"
          value={currentText}
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[12rem]"
          placeholder="enter your task"
          onChange={(e) => {
            setCurrentText(e.target.value);
          }}
        />
      ) : (
        <p className="w-[12rem] truncate">{currentText}</p>
      )}
      <div className="buttons">
        {editOpen ? (
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              setEditOpen(false);
              dispatch(
                editTodo({ id, description: currentText, isActive: isActive })
              );
            }}
          >
            Saved
          </button>
        ) : (
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              setEditOpen(true);
            }}
          >
            Edit
          </button>
        )}
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-8"
          onClick={() => {
            console.log("happening");
            dispatch(deleteTodo(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
