import SectionHeader from '../components/SectionHeader'
import styles from './Page.module.css'

const ROLE_ORDER = ['Editor-in-Chief', 'Associate Editor', 'Board Member']
const ROLE_LABELS = {
  'Editor-in-Chief': 'Editor-in-Chief',
  'Associate Editor': 'Associate Editors',
  'Board Member':    'Editorial Board Members',
}

export default function EditorialBoard({ data }) {
  return (
    <div className={`${styles.page} site-wrap`}>
      <SectionHeader title="Editorial Board" label="2026" />
      {ROLE_ORDER.map(role => {
        const members = data.board.filter(m => m.role === role)
        if (!members.length) return null
        return (
          <div key={role} className={styles.boardSection}>
            <h4>{ROLE_LABELS[role]}</h4>
            <div className={styles.boardGrid}>
              {members.map(m => (
                <div key={m.id} className={styles.boardCard}>
                  <div className={styles.boardAvatar}>{m.initials}</div>
                  <div className={styles.boardInfo}>
                    <h5>{m.name}</h5>
                    <p>{m.institution}</p>
                    <span className={styles.country}>{m.country}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
