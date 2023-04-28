import { SlPlus } from 'react-icons/sl';
import './styles.css';
import Label from '../Label/Label';

export default function NewNote({handleTitle, handleText, saveHandler, title, text}) {
    

    return (
        <div className="note new-note">
            <input 
                type='text' 
                maxLength="25" 
                value = {title} 
                placeholder='Title...' 
                onChange={handleTitle}>
            </input>
            <textarea
                cols="10"
                rows="5"
                placeholder="Type...."
                maxLength="100"
                value={text}
                onChange={handleText}>
            </textarea>
            <div className="note-footer">
                <Label />
                <button onClick={saveHandler}><SlPlus /></button>
            </div>
        </div>
  )
}
