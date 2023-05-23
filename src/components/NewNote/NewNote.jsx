import LinearProgress from "@mui/material/LinearProgress";
import { SlPlus } from 'react-icons/sl';
import Select from "react-select";
import './styles.css';


export default function NewNote({handleTitle, handleText, saveHandler, title, text, handleLabel, value}) {
    const charLimit = 200;
    const charLeft = charLimit - text.length

    const labels = [
        { value: "task", label: "task" },
        { value: "reminder", label: "reminder" },
        { value: "note", label: "note" },
      ];

    const customStyles = {
        option: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isSelected ? "#1A1A1A" : "#fff",
            backgroundColor:
                state.isSelected ? "#a0a0a0" 
                : state.isFocused ? "#0E0E0E"
                : "#1A1A1A",
        }),
        control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#1A1A1A",
            padding: "10px",
            border: "none",
            boxShadow: "none",
        }),
        singleValue: (baseStyles) => ({ ...baseStyles, color: "#fff" }),
    };

    return (
        <div className="new-note">
            <input 
                name="title"
                type='text' 
                maxLength="25" 
                value = {title} 
                placeholder='Title' 
                onChange={handleTitle}>
            </input>

            <textarea
                name="content"
                cols="10"
                rows="7"
                placeholder="Type...."
                maxLength={charLimit}
                value={text}
                onChange={handleText}>
            </textarea>

            <LinearProgress color='secondary' variant="determinate"
                value={Math.round((100 / charLimit) * charLeft)}
            />
            
            <div className="note-footer">
                <Select
                    styles={customStyles}
                    value={value}
                    options={labels}
                    onChange={(e) => handleLabel(e)}
                    placeholder={'Add a label'}
                />
                <button onClick={saveHandler}><SlPlus /></button>
            </div>
            
        </div>
  )
}
