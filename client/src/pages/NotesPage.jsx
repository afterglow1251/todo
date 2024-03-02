import styles from '../App.module.css'
import { useState, useEffect } from 'react'
import ItemList from '../components/ItemList'
import axios from 'axios'
import AddButton from '../components/AddButton'



const NotesPage = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    const getNotes = async () => {
      const response = await axios.get('/notes/')
      const data = response.data
      setNotes(data)
    }
    void getNotes()
  }, [])

  return (
    <>
      <div className={styles.notesHeader}>
        <h2 className={styles.notesTitle}>&#9782; Notes</h2>
        <p className={styles.notesCount}>{notes.length}</p>
      </div>
      <div className={styles.notesList}>
        {
          notes.map((note, index) => (
            <ItemList key={index} note={note} />
          ))
        }
      </div>
      <AddButton />
    </>
  )
}

export default NotesPage