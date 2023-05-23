import { SlTrash } from 'react-icons/sl';
import { motion } from "framer-motion"
import './styles.css' ;
import Label from '../Label/Label';


export default function Note({title, text, deleteNote, id, label, index}) {


  return (
    <motion.div className="note"
    initial={{ opacity: 0, scale: .9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
    }}>
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
    </motion.div>
  )
}
