import { FC, useState, useEffect } from 'react';
import Note from './note/note';

let counter = 0;

type TNotes = {
    id: number,
    content: string
}

const NotesApp: FC = () => {
    const [notes, setNotes] = useState<TNotes[]>([]);

    useEffect(() => {
        const storage = localStorage.getItem("notes");
        if (storage) {
            setNotes(JSON.parse(storage));
            counter = JSON.parse(storage).length;
        }
    }, [])

    const handleAddNotes = () => {
        const newNotes = [...notes];
        newNotes.push({ id: counter++, content: "" });
        setNotes(newNotes);
    }

    const handleDelete = (id: number) => {
        const deletNote = notes.findIndex(note => note.id === id);
        const newNotes = [...notes.slice(0, deletNote), ...notes.slice(deletNote + 1)]
        setNotes(newNotes);
        localStorage.setItem("notes", JSON.stringify(newNotes));
        if(newNotes.length === 0) {
            localStorage.removeItem("notes");
        }
    }

    const handleContent = (id: number, content: string) => {
        const idx = notes.findIndex(note => note.id === id);
        const newContent = [...notes.slice(0, idx), { id, content }, ...notes.slice(idx + 1)];
        setNotes(newContent);
        localStorage.setItem("notes", JSON.stringify(newContent));
    }

    return (
        <div className='noteApp__container'>
            <button className='btn__add' onClick={handleAddNotes}>Add notes</button>
            {notes.map(note => (
                <Note key={note.id} {...note} deleteFn={handleDelete} changeFn={handleContent} />
            ))}
        </div>
    )
}

export default NotesApp;