import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-xl p-[5px]">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
          There is no task pending
        </div> */}
        <div className="bg-slate-100/95 space-y-3 p-5 w-full h-full rounded-lg">
          {todos.map((todoItem) => (
            console.log(todoItem),
            <TodoCard {...todoItem}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
