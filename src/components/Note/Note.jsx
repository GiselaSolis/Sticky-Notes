import { SlTrash } from 'react-icons/sl';
import './styles.css' ;
import Label from '../Label/Label';


export default function Note({title, text, deleteNote, id, label}) {
  return (
    <div className="note">
        <div className="note-head">
            <h2>{title} </h2>
            <button className='note-delete' onClick={() => deleteNote(id)}>
                <SlTrash />
            </button>
        </div>
        <div className='note-body'>
            {text}
        </div>
        <div className='note-footer'>
            <Label label={label} />
        </div>
    </div>
  )
}
