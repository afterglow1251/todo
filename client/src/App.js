import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Header from './components/Header'
import NotesPage from './pages/NotesPage'
import NotePage from './pages/NotePage'


function App() {
  return (
    <Router>
      <div className={`${styles.container} ${styles.dark}`}>
        <div className={styles.app}>
          <Header />
          <Routes>
            <Route path='/*' element={<NotesPage />} />
            <Route path='/note/:id/' element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
