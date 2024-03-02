import styles from '../App.module.css'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const NotePage = () => {

  const navigate = useNavigate()
  const { id: noteId } = useParams()
  const [note, setNote] = useState(null)

  useEffect(() => {
    const getNote = async () => {
      if (noteId === 'new') return

      const response = await axios.get(`/note/${noteId}/`)
      const data = response.data
      setNote(data)
    }
    void getNote()
  }, [noteId])

  const createNote = async () => {
    await axios.post(`/note/create/`,
      JSON.stringify(note), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  }

  const updateNote = async () => {
    await axios.put(`/note/${noteId}/update/`,
      JSON.stringify(note), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  }

  const deleteNote = async () => {
    await axios.delete(`/note/${noteId}/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    navigate('/')
  }

  const handleSubmit = async () => {
    if (noteId !== 'new') {
      if (!note.body.trim()) {
        await deleteNote()
      } else {
        await updateNote()
      }
    } else if (noteId === 'new' && note && note.body.trim()) {
      await createNote()
    }

    navigate('/')
  }

  return (
    <div className={styles.note}>
      <div className={styles.noteHeader}>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>

        {
          noteId !== 'new' ? (
            <button onClick={deleteNote}>DELETE</button>
          ) : <button onClick={handleSubmit}>Done</button>
        }


      </div>
      <textarea onInput={e => setNote({ ...note, 'body': e.target.value })}
                defaultValue={note?.body}>
      </textarea>
    </div>
  )
}

export default NotePage