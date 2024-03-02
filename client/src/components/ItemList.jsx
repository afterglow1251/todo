import styles from '../App.module.css'
import { Link } from 'react-router-dom'

const getTime = (note) => {
  const date = new Date(note.updated)
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}

const getTitle = (note) => {
  const title = note.body.split('\n')[0]
  return title.length < 45 ? title : title.slice(0, 45)
}

const getContent = (note) => {
  const title = getTitle(note)
  let content = note.body.replace(/\n/g, ' ')

  content = content.replace(title, '')

  if (content.length > 45) {
    content = content.substring(0, 45).trim() + '...'
  }

  return content
}

const ItemList = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className={styles.notesListItem}>
        <h3>{getTitle(note)}</h3>
        <p><span>{getTime(note)}</span>{getContent(note)}</p>
      </div>
    </Link>
  )
}


export default ItemList