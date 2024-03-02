import styles from '../App.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'


const AddButton = () => {
  return (
    <Link to='/note/new/' className={styles.floatingButton}>
      <AddIcon />
    </Link>
  )
}

export default AddButton