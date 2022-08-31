import { ChangeEvent, MouseEvent, FC, FormEvent, useState } from 'react';

type TTodos = {
    id: number,
    content: string,
    completed: boolean
}

let key = 0;

const TodoList: FC = () => {
    const [todos, setTodos] = useState<TTodos[]>([]);
    const [input, setInput] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInput(value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) { return };
        key++;
        setTodos(prev => [...prev, {id: key, content: input.trim(), completed: false}]);
        setInput("");
    }

    const handleClick = (e: MouseEvent<HTMLLIElement>) => {
        const { id } = e.target as HTMLLIElement;
        const idx = todos.findIndex(todo => todo.id === +id);
        if (e.type === 'click') {
            setTodos(prev => [...prev.slice(0, idx), {...prev[idx], completed: !prev[idx]["completed"]}, ...prev.slice(idx+1)])
        } else if (e.type === 'contextmenu') {
            setTodos(prev => [...prev.slice(0, idx), ...prev.slice(idx+1)])
        }
    }

    return (
        <main className='todolist__container'>
            <h1>todos</h1>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" className="input" id="input" placeholder="Enter your todo" autoComplete="off"
                    onChange={handleChange} value={input} />

                <ul className="todos" id="todos">
                    {
                        todos?.map(todo => (
                            <li id={""+todo.id} className={todo.completed ? "completed" : ""} key={todo.id} onClick={handleClick} onContextMenu={handleClick}>{todo.content}</li>
                        ))
                    }
                </ul>
            </form>
            <small>Left click to toggle completed. <br /> Right click to delete todo</small>
        </main>
    )
}

export default TodoList;