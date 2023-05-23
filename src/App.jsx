import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NoteList from './components/NoteList/NoteList'

function App() {
  
  return (
    <div className='container'>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path='/' element={<NoteList/>}/>
          <Route path='/:label' element={<NoteList />}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
