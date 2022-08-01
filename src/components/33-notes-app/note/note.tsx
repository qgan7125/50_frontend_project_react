import { ChangeEvent, FC, useState } from "react";

interface INote {
    id: number,
    content: string,
    deleteFn: (id: number) => void,
    changeFn: (id: number, content: string) => void
}

const Note: FC<INote> = ({ id, content, deleteFn, changeFn }) => {
    const [edit, setEdit] = useState(true);

    const handleClick = () => {
        setEdit(!edit);
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        changeFn(id, value);
    }
    return (
        <div className="note__container">
            <div className="tools">
                <button className="edit" onClick={handleClick}><i className="fas fa-edit"></i></button>
                <button className="delete" onClick={() => deleteFn(id)}><i className="fas fa-trash-alt"></i></button>
            </div>
            <div className={"main " + (edit ? "hidden" : "")}>{content}</div>
            <textarea className={!edit ? "hidden" : ""} value={content} onChange={handleChange}></textarea >
        </div >
    )
}

export default Note;