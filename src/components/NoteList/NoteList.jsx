
import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewNote from "../NewNote/NewNote";
import Note from "../Note/Note";
import './styles.css'


export default function NoteList() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [label, setLabel] = useState([])

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
 
  const handleText = (e) =>{
    setText(e.target.value)
  }

  const handleLabel = (e) => {
    setLabel(e)
  }

  const saveHandler = () => {
    console.log('its working fella')

    setNotes((prevState) => [ ...prevState,{
        id: uuid(),
        title: title,
        text: text,
        label: label,
      },
    ]);


    //clear the textarea
    setText("");
    console.log('text-',text)
    setTitle("");
    console.log("notes", notes)
    setLabel("")
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className="note-list">

      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          label={note.label}
          deleteNote={deleteNote}
          
        />
      ))}

      <NewNote 
        handleTitle = {handleTitle} 
        handleText = {handleText} 
        saveHandler = {saveHandler}
        title = {title}
        text = {text}
        handleLabel={handleLabel}
         />
    </div>
  )
}
