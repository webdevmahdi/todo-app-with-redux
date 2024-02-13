import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-3xl font-semibold text-center my-10">My todo</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
