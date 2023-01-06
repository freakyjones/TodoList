import { useDispatch } from "react-redux";
import { filterType } from "../../slices/todoSlice";

function TodoFilter() {
  const dispatch = useDispatch();
  const handleFilter = (type) => {
    switch (type) {
      case "All":
        dispatch(filterType("All"));
        return;
      case "Active":
        dispatch(filterType("Active"));
        return;
      case "Completed":
        dispatch(filterType("Completed"));
        return;
      default:
        dispatch(filterType("All"));
    }
  };
  return (
    <div className="todofilter mt-6">
      <div className="todofilter__container flex justify-center gap-4">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            handleFilter("All");
          }}
        >
          All
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            handleFilter("Active");
          }}
        >
          Active
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            handleFilter("Completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoFilter;
