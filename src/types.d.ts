interface Todo {
    title: string;
    dueDate: Date;
    tagList: string[];
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string, dueDate: Date, tagList: string[]) => void;

