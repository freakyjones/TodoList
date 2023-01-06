import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Taskitem from "./taskitem/taskitem";

function TodoTasks() {
  const filterType = useSelector((state) => state.todo.type);
  const todoList = useSelector((state) => state.todo.todoList);
  const [taskRemaining, setTaskRemaining] = useState(0);
  const [filterTodoList, setFilterTodoList] = useState([]);

  useEffect(() => {
    let task = 0;
    todoList.forEach((item) => {
      if (!item.isActive) {
        task += 1;
      }
    });
    setTaskRemaining(task);
  }, [todoList]);
  useEffect(() => {
    setFilterTodoList([]);
    if (filterType === "All") {
      setFilterTodoList(todoList);
    } else if (filterType === "Active") {
      let list = [];
      todoList.forEach((item) => {
        if (!item.isActive) {
          list = [...list, item];
        }
      });
      setFilterTodoList(list);
      console.log("list", list);
    } else if (filterType === "Completed") {
      let listitem = [];
      todoList.forEach((item) => {
        if (item.isActive) {
          listitem = [...listitem, item];
        }
      });
      console.log("listItem", listitem);
      setFilterTodoList(listitem);
    } else {
      setFilterTodoList(todoList);
    }
  }, [filterType, todoList]);
  console.log(filterTodoList);
  return (
    <div className="todotasks mt-6 flex items-center justify-center ">
      <div className=" w-50">
        <h1 className="text-[2rem] text-center">
          {taskRemaining} Tasks Remaining
        </h1>
        <div className="todotasks__container">
          {filterTodoList.map((item) => {
            const { id, isActive, description } = item;
            return (
              <Taskitem id={id} isActive={isActive} description={description} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoTasks;
