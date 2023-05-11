import LinearProgress from "@mui/material/LinearProgress";
import { SlPlus } from 'react-icons/sl';
import Select from "react-select";
import './styles.css';


export default function NewNote({handleTitle, handleText, saveHandler, title, text, handleLabel}) {
    const charLimit = 200;
    const charLeft = charLimit - text.length

    const labels = [
        { value: "task", label: "task" },
        { value: "reminder", label: "reminder" },
      ];

    return (
        <div className="new-note">
            <input 
                type='text' 
                maxLength="25" 
                value = {title} 
                placeholder='Title' 
                onChange={handleTitle}>
            </input>
            <textarea
                cols="10"
                rows="7"
                placeholder="Type...."
                maxLength={charLimit}
                value={text}
                onChange={handleText}>
            </textarea>

            <LinearProgress color='secondary' variant="determinate"
                value={Math.round((100 / charLimit) * charLeft)} />
            
           
            
            <div className="note-footer">
                <Select options={labels} handleLabel={e => handleLabel(e)} />
                <button onClick={saveHandler}><SlPlus /></button>
            </div>
            
        </div>
  )
}
