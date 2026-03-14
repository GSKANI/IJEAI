import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AdminFloater.module.css'

export default function AdminFloater() {
  const [showFloater, setShowFloater] = useState(false)
  const [keySequence, setKeySequence] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  // Secret key: Press 'A' + 'D' + 'M' + 'I' + 'N' to unlock
  const SECRET_CODE = 'ADMIN'

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase()
      if (key.match(/^[A-Z]$/)) {
        const newSequence = (keySequence + key).slice(-SECRET_CODE.length)
        setKeySequence(newSequence)

        if (newSequence === SECRET_CODE) {
          setShowFloater(true)
          setKeySequence('')
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [keySequence])

  if (!showFloater) return null

  return (
    <div className={styles.floater}>
      <button 
        className={styles.floaterBtn}
        onClick={() => setIsOpen(!isOpen)}
        title="Admin Panel"
      >
        ⚙️
      </button>

      {isOpen && (
        <div className={styles.floaterMenu}>
          <div className={styles.floaterHeader}>
            <h3>Admin Panel</h3>
            <button 
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className={styles.floaterContent}>
            <button 
              onClick={() => navigate('/admin')}
              className={styles.adminLink}
            >
              Go to Admin Dashboard
            </button>
            <button 
              onClick={() => setShowFloater(false)}
              className={styles.hideBtn}
            >
              Hide Floater
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
