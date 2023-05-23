import './styles.css'

export default function Label(label) {
    

  return (
    <div>
      <div className='label'
        style={{
          backgroundColor:
          label.label === "task" ? "#ab47bc"
          : label.label === "reminder" ? "#d32f2f"
          : label.label === "note" ? "#0288d1"
          : ""
        }} >

        {label.label}
      </div>

    </div>

  )
}
