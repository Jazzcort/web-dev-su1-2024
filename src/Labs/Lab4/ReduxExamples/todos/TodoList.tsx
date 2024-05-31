import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);

    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm />
                {todos.map((item: any) => <TodoItem todo={item}/>)}
            </ul>
            <hr />
        </div>
    );
}
