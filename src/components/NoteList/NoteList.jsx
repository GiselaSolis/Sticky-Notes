
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import NewNote from "../NewNote/NewNote";
import Note from "../Note/Note";
import './styles.css'



export default function NoteList() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [label, setLabel] = useState([]);
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([])

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
        label: label.label,
      },
    ]);

    setText("");
    setTitle("");
    setLabel("");
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const data =localStorage.getItem("Note-List");
    if (data !== null) {
      setNotes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Note-List", JSON.stringify(notes));
  }, [notes]);

  const params = useParams()
  const noteLabel = params.label;


  const filterLabelNotes = () => {
    const filteredNoteList = notes.filter((note) => note.label === noteLabel)
    setFilteredNotes(filteredNoteList)
  }

  useEffect(() => {
    filterLabelNotes()
  },[noteLabel])

  return (
    <div className="note-list">
        {noteLabel !== undefined ?
          filteredNotes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              label={note.label}
              deleteNote={deleteNote}
            />

          ))
          : notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            label={note.label}
            deleteNote={deleteNote}
          />
          ))
        }
      {noteLabel === undefined &&
        <NewNote 
          handleTitle = {handleTitle} 
          handleText = {handleText} 
          saveHandler = {saveHandler}
          title = {title}
          text = {text}
          handleLabel={handleLabel}
          value = {label}
        />
      }
      
      {noteLabel !== undefined && filteredNotes.length <= 0 ? <p>empty!</p>
          : ""
      }

    </div>
  )
}
